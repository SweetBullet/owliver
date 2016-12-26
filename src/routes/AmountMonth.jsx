import React, {Component, PropTypes} from 'react';
import {routerRedux} from 'dva/router';
import {connect} from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import styles from './Default.less';
import ECharts from 'react-echarts';
import {Switch} from 'antd';
import AmountButton from '../components/Amount/AmountButton';
import AmountChart from '../components/Amount/AmountThreeChart';
import AmountMonthChart from '../components/Amount/AmountMonthChart'

function AmountMonth({location, dispatch, amount}) {

    const {
        amounts, dateInfo, isBarForMonth,
    } = amount;


    const amountChartProps = {
        threeWeekAgo: amounts['threeWeekAgo'],
        twoWeekAgo: amounts['twoWeekAgo'],
        oneWeekAgo: amounts['oneWeekAgo'],
        thisWeek: amounts['thisWeek'],
        dateInfo: dateInfo,
        isBar: isBarForMonth,
}
    ;

    function onChange(checked) {
        console.log(`switch to ${checked}`);
        dispatch({
            type: 'amount/updateMonthSuccess',
            payload: !checked,
        });
    };

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
    }

    return (
        <MainLayout location={location}><br/>
            <div className={styles.n}>
                <AmountButton {...amountButtonProps}/> <br/>
                <Switch defaultChecked={false} unCheckedChildren="折线图" checkedChildren="柱形图" onChange={onChange}/>
                <br/><br/>
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

