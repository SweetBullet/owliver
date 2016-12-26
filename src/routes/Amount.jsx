import React, {PropTypes} from 'react';
import {routerRedux} from 'dva/router';
import {connect} from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import AmountButton from '../components/Amount/AmountButton';
import AmountTodayChart from '../components/Amount/AmountTodayChart';
import styles from './Default.less';


function Amount({location, dispatch, amount}) {

    const {
        amounts,
    }=amount;


    const amountButtonProps = {
        cursor: '1',
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


    const amountTodayChartProps = {
        thisWeekAmounts: amounts['thisWeek'],
    }

    return (
        <MainLayout location={location}><br/>
            <div className={styles.n}>
                <AmountButton {...amountButtonProps} /> <br/><br/>
                <AmountTodayChart {...amountTodayChartProps}/>
            </div>
        </MainLayout>
    );

}


Amount.propTypes = {
    amount: PropTypes.object,
    location: PropTypes.object,
    dispatch: PropTypes.func,
}

function mapStateToProps({amount}) {
    return {amount};
}

export default connect(mapStateToProps)(Amount);