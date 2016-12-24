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
         // threeWeekAgo,twoWeekAgo,oneWeekAgo,thisWeek,
        monthAmounts,dateInfo,
    } = amount;


    const amountChartProps = {
        threeWeekAgo:monthAmounts['threeWeekAgo'],
        twoWeekAgo: monthAmounts['twoWeekAgo'],
        oneWeekAgo:monthAmounts['oneWeekAgo'],
        thisWeek:monthAmounts['thisWeek'],
        dateInfo:dateInfo,
    };

    function onChange(checked) {
        console.log(`switch to ${new date()}`);
        console.log(`amounts:${monthAmounts['threeWeekAgo'][0]}`);

        // dispatch({
        //     type: 'amount/update',
        //     payload: checked,
        // });
    };

    const amountButtonProps = {
        cursor: '4',
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
                <Switch defaultChecked={false} unCheckedChildren="饼图" checkedChildren="返回" onChange={onChange}/>
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

