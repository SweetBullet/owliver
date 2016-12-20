import {query} from '../services/conversation';
import {parse} from 'qs';

export default {

    namespace: 'conversation',

    state: {
        list: [],
        field: '',
        keyword: '',
        total: null,
        loading: false, // 控制加载状态
        current: 1, // 当前分页信息
        term:0,
    },

    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location => {
                if (location.pathname === '/conversation') {
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
            yield put({type: 'showLoading'});
            yield put({
                type: 'updateQueryKey',
                payload: {page: 1, field: '', keyword: '', ...payload},
            });
            const {data} = yield call(query, parse(payload));
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
    },

    reducers: {
        showLoading(state) {
            return {...state, loading: true};
        },
        querySuccess(state, action) {
            return {...state, ...action.payload, loading: false};
        },
        updateQueryKey(state, action) {
            return {...state, ...action.payload};
        },
    },

};
