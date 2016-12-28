import {query} from '../services/amount';
import {parse} from 'qs';

export default {

    namespace: 'amount',

    state: {
        isBarForThreeDay: true,
        chartType: 'bar',
        // amounts: {},
        dkf: [],
        fx: [],
        wxd: [],
        wsc: [],
        ls: [],
        pf: [],
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
                        // amounts: data.amounts,
                        dkf: data.amounts['dkf'],
                        fx: data.amounts['fx'],
                        wxd: data.amounts['wxd'],
                        wsc: data.amounts['wsc'],
                        ls: data.amounts['ls'],
                        pf: data.amounts['pf'],
                    },
                });
                console.log(`data:${data}`);
                console.log(`amounts:${data.amounts}`);
                console.log(`dkf:${data.amounts['dkf']}`);
            }
        },
    },

    reducers: {
        querySuccess(state, action) {
            return {...state, ...action.payload, loading: false};
        },
        updateQueryKey(state, action) {
            return {...state, ...action.payload};
        },
        updateSuccess(state, action) {
            const newStatus = action.payload;
            console.log(`reducers updateSuccess:${newStatus}`);
            return {...state, isBarForThreeDay: newStatus, loading: false};
        },
        updateMonthSuccess(state, action) {
            const newStatus = action.payload;
            console.log(`reducers updateSuccess new state:${newStatus}`);
            return {...state, isBarForMonth: newStatus, loading: false};
        },
        changeChartType(state, action) {
            const newStatus = action.payload;
            console.log(`reducers changeChartType new state:${newStatus}`);
            return {...state, chartType: newStatus, loading: false};
        },
    },

};
