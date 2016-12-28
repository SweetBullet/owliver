import {queryShotMessageAmount} from '../services/universalRequestTool';
import {parse} from 'qs';

export default {

    namespace: 'shotMessageAmount',

    state: {
        chartType: '',
    },

    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location => {
                if (location.pathname === '/shotMessageAmount') {
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
            const {data} = yield call(queryShotMessageAmount, parse(payload));
            if (data) {
                yield put({
                    type: 'querySuccess',
                    payload: {
                        amounts: data.amounts,
                    },
                });
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
        changeChartType(state, action) {
            const newStatus = action.payload;
            console.log(`reducers updateSuccess:${newStatus}`);
            return {...state, chartType: newStatus, loading: false};
        },
    },

};
