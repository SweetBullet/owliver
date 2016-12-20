import React, {PropTypes} from 'react';
import {routerRedux} from 'dva/router';
import {connect} from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import AmountProgress from '../components/Amount/AmountProgress';
import AmountList from '../components/Amount/AmountList';
import AmountButton from '../components/Amount/AmountButton';
import styles from './Amount.less';

function Amount({location, dispatch, amount}) {
    const {
        loading, list, total, current, field, keyword, percent,
    }=amount;

    const amountButtonProps = {
        handleChange(term){
            dispatch(routerRedux.push({
                pathname: '/amount',
                query: {term},
            }));
        },
    }

    const amountListProps = {
        dataSource: list,
        loading,
        total,
        current,
        onPageChange(page) {
            dispatch(routerRedux.push({
                pathname: '/amount',
                query: {field, keyword, page},
            }));
        },
    };

    const amountProgress = {
        dkf: percent[0],
        fx: percent[1],
        wxd: percent[2],
        wsc: percent[3],
        pf: percent[4],
        ls: percent[5],
    }

    return (
        <MainLayout location={location}>
            <div className={styles.normal}>
                <AmountButton {...amountButtonProps} /> <br/>
                <AmountList {...amountListProps}/>
                <AmountProgress {...amountProgress} />
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