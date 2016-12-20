import { query} from '../services/message';
import {parse} from 'qs';

export default {

    namespace: 'message',

    state: {
        list: [],
        field: '',
        keyword: '',
        total: null,
        loading: false, // 控制加载状态
        current: 1, // 当前分页信息
        currentItem: {}, // 当前操作的用户条目对象
        modalVisible: false, // 弹出窗的显示状态
        modalType: 'create', // 弹出窗的类型（添加用户，编辑用户）
    },

    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location => {
                if (location.pathname === '/message') {
                    dispatch({
                        type: 'query',
                        payload: location.query,
                    });
                }
            });
        },
    },

    effects: {
        *query({payload}, {select, call, put}) {
            yield put({ type: 'showLoading' });
            yield put({
                type: 'updateQueryKey',
                payload: { page: 1, field: '', keyword: '', ...payload },
            });
            const { data } = yield call(query, parse(payload));
            if (data) {
                yield put({
                    type: 'querySuccess',
                    payload: {
                        list: data.data,
                        total: data.page.total,
                        current: data.page.current,
                    },
                });
            }
        },
        *'delete'({ payload }, { call, put }) {
            yield put({ type: 'showLoading' });
            const { data } = yield call(remove, { id: payload });
            if (data && data.success) {
                yield put({
                    type: 'deleteSuccess',
                    payload,
                });
            }
        },
        *create({ payload }, { call, put }) {
            yield put({ type: 'hideModal' });
            yield put({ type: 'showLoading' });
            const { data } = yield call(create, payload);
            if (data && data.success) {
                yield put({
                    type: 'createSuccess',
                    payload: {
                        list: data.data,
                        total: data.page.total,
                        current: data.page.current,
                        field: '',
                        keyword: '',
                    },
                });
            }
        },
        *update({ payload }, { select, call, put }) {
            yield put({ type: 'hideModal' });
            yield put({ type: 'showLoading' });
            const id = yield select(({ users }) => users.currentItem.id);
            const newUser = { ...payload, id };
            const { data } = yield call(update, newUser);
            if (data && data.success) {
                yield put({
                    type: 'updateSuccess',
                    payload: newUser,
                });
            }
        },
    },

    reducers: {
        showLoading(state) {
            return {...state, loading: true};
        },
        createSuccess(state, action) {
            // const newUser = action.payload;
            return { ...state, ...action.payload, loading: false };
        },
        deleteSuccess(state, action) {
            const id = action.payload;
            const newList = state.list.filter(user => user.id !== id);
            return { ...state, list: newList, loading: false };
        },
        updateSuccess(state, action) {
            const updateUser = action.payload;
            const newList = state.list.map(user => {
                if (user.id === updateUser.id) {
                    return { ...user, ...updateUser };
                }
                return user;
            });
            return { ...state, list: newList, loading: false };
        },
        querySuccess(state, action) {
            return {...state, ...action.payload, loading: false};
        },
        showModal(state, action) {
            return { ...state, ...action.payload, modalVisible: true };
        },
        hideModal(state) {
            return { ...state, modalVisible: false };
        },
        updateQueryKey(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
