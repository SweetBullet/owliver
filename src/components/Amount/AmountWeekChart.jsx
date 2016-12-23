import React, {PropTypes} from 'react';
import {Switch} from 'antd';
import ECharts from 'react-echarts';

function AmountWeekChart({
    barOrPie, amounts
}) {




    return (
        <div>
            <ECharts option={getOption(barOrPie)} style={{width: '1100px', height: '480px'}}/>
        </div>
    );
}

AmountWeekChart.propTypes = {
    barOrPie: PropTypes.any,
    amounts: PropTypes.array,
};

export default AmountWeekChart;
