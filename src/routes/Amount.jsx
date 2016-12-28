import React, {PropTypes} from 'react';
import {routerRedux} from 'dva/router';
import {connect} from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import AmountButton from '../components/Amount/Message/AmountButton';
import AmountTodayChart from '../components/Amount/Message/AmountTodayChart';
import styles from './Default.less';


function Amount({location, dispatch, amount}) {

    const {
        dkf, fx, wxd, wsc, ls, pf,
    }=amount;

    var todayAmounts = [];
    todayAmounts[0] = dkf.slice(27, 28);
    todayAmounts[1] = fx.slice(27, 28);
    todayAmounts[2] = wxd.slice(27, 28);
    todayAmounts[3] = wsc.slice(27, 28);
    todayAmounts[4] = ls.slice(27, 28);
    todayAmounts[5] = pf.slice(27, 28);


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
        // thisWeekAmounts: amounts['thisWeek'],
        todayAmounts: todayAmounts,
        dkf: dkf,
        fx: fx,
        wxd: wxd,
        wsc: wsc,
        ls: ls,
        pf: pf,
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