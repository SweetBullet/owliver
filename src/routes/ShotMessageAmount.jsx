import React, {PropTypes} from 'react';
import {routerRedux} from 'dva/router';
import {connect} from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import styles from './Default.less';
import ShotMessageChart from '../components/Amount/ShotMessage/ShotMessageChart';
import AmountSelector from '../components/Amount/ShotMessage/AmountSelector';

function ShotMessageAmount({location, dispatch, shotMessageAmount}) {
    const {

    } = shotMessageAmount;

    const shotMessageChartProps={
        handleSelectorChange(value){
            dispatch({
                type: 'shotMessageAmount/changeChartType',
                payload: value,
            });
        },
    }

    return (
        <MainLayout location={location}>
            <div className={styles.n}>
                <AmountSelector {...shotMessageChartProps}/>
                {/*<ShotMessageChart />>*/}
            </div>
        </MainLayout>
    );
}

ShotMessageAmount.propTypes = {
    message: PropTypes.object,
    location: PropTypes.object,
    dispatch: PropTypes.func,
};

function mapStateToProps({shotMessageAmount}) {
    return {shotMessageAmount};
}

export default connect(mapStateToProps)(ShotMessageAmount);
