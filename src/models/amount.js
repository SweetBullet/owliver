import {query} from '../services/amount';
import {parse} from 'qs';

export default {

    namespace: 'amount',

    state: {
        barOrPie: 'bar',
        amounts: [],
        dateInfo:[],
        monthAmounts: {
            threeWeekAgo: [[],],
            twoWeekAgo: [[],],
            oneWeekAgo: [[],],
            thisWeek: [[],],
        },
        list: [],
        percent: {  },
        field: '',
        keyword: '',
        total: null,
        loading: false, // 控制加载状态
        current: 1, // 当前分页信息
        term: 0,
    },

    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location => {
                if (location.pathname === '/amount' || location.pathname === '/amount3day'
                    || location.pathname === '/amount1week' || location.pathname === '/amount1month') {
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
            console.log(`query`);
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
                        percent: data.percent,
                        amounts: data.amounts,
                        monthAmounts: data.month,
                        dateInfo:data.date,
                    },
                });
                console.log(`amounts:${data.amounts}`);
                console.log(`monthamounts:${data.month}`);
            }
        },
        *update({payload}, {select, call, put}) {
            console.log(`update:${payload}`);
            yield put({type: 'showLoading'});
            yield put({
                type: 'updateSuccess',
                payload: payload == true ? 'pie' : 'bar',
            });

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
        updateSuccess(state, action) {
            const newStatus = action.payload;
            console.log(`reducers updateSuccess:${newStatus}`);
            return {...state, barOrPie: newStatus, loading: false};
        },
    },

};
