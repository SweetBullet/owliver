import React, {Component, PropTypes} from 'react';
import {routerRedux} from 'dva/router';
import {connect} from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import styles from './Default.less';
import AmountButtonForMonth from '../components/Amount/Message/AmountButtonForMonth';
import AmountMonthChart from '../components/Amount/Message/AmountMonthChart'

function AmountMonth({location, dispatch, amount}) {

    const {
        chartType, dkf, fx, wxd, wsc, ls, pf,
    } = amount;


    const amountChartProps = {
            dkf: dkf,
            fx: fx,
            wxd: wxd,
            wsc: wsc,
            ls: ls,
            pf: pf,
            chartType: chartType,
        }
        ;

    const amountButtonProps = {
        cursor: '3',
        handleChange(term){
            switch (term) {
                case '1':
                    dispatch(routerRedux.push({
                        pathname: '/amount',
                        query: {term},
                    }));
                    break;
                case '2':
                    dispatch(routerRedux.push({
                        pathname: '/amount3day',
                        query: {term},
                    }));
                    break;
                case '3':
                    dispatch(routerRedux.push({
                        pathname: '/amount1month',
                        query: {term},
                    }));
                    break;
                default:
                    break;
            }
        },
        handleSelectorChange(value){
            dispatch({
                type: 'amount/changeChartType',
                payload: value,
            });
        },
        defaultSelector: chartType == 'bar' ? '柱形图' : chartType == 'line' ? '折线图' : '饼图',
    }


    return (
        <MainLayout location={location}><br/>
            <div className={styles.n}>
                <AmountButtonForMonth {...amountButtonProps}/> <br/>
                <AmountMonthChart {...amountChartProps}/>
            </div>
        </MainLayout>
    );


}


AmountMonth.propTypes = {
    amount: PropTypes.object,
    location: PropTypes.object,
    dispatch: PropTypes.func,
}

function mapStateToProps({amount}) {
    return {amount};
}


export default connect(mapStateToProps)(AmountMonth);

