import React, {PropTypes} from 'react';
import {routerRedux} from 'dva/router';
import {connect} from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import AmountProgress from '../components/Amount/AmountProgress';
import AmountList from '../components/Amount/AmountList';
import AmountButton from '../components/Amount/AmountButton';
import AmountTodayChart from '../components/Amount/AmountTodayChart';
import styles from './Default.less';


function Amount({location, dispatch, amount}) {

    const {
        loading, list, total, current, field, keyword, percent,
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

    const amountListProps = {
        dataSource: list,
        loading,
        total,
        current,
    };

    const amountProgress = {
        dkf: percent['dkf'],
        fx: percent['fx'],
        wxd: percent['wxd'],
        wsc: percent['wsc'],
        pf: percent['ls'],
        ls: percent['pf'],
    }


    return (
        <MainLayout location={location}>
            <div className={styles.p}>
                <AmountButton {...amountButtonProps} /> <br/><br/>
                <AmountTodayChart />
                {/*<AmountList {...amountListProps}/>*/}
                {/*<AmountProgress {...amountProgress} />*/}
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