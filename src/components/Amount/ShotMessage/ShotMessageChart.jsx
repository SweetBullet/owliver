import React, {PropTypes} from 'react';
import {Switch} from 'antd';
import ECharts from 'react-echarts';

function AmountMonthChart({
    chartType
}) {

    //init yAxis: date array
    var date = new Date();
    var dateArray = [];
    date.setDate(date.getDate() - 28);
    for (var i = 0; i < 28; i++) {
        date.setDate(date.getDate() + 1);
        var month = (date.getMonth() + 1) % 12;
        if (month == 0)
            month = 12;
        dateArray.push(date.getFullYear() + '-' + month + '-' + date.getDate());
    }

    //parse amounts:init amount array of line chart
    var lineAmountArray = [[], [], [], [], [], []];
    for (var i = 0; i < 6; ++i) {
        Array.prototype.push.apply(lineAmountArray[i], threeWeekAgo[i]);
        Array.prototype.push.apply(lineAmountArray[i], twoWeekAgo[i]);
        Array.prototype.push.apply(lineAmountArray[i], oneWeekAgo[i]);
        Array.prototype.push.apply(lineAmountArray[i], thisWeek[i]);
    }


    var lineOption = {
        // color: ['#3398DB'],
        title: {
            text: '最近一个月消息量趋势',
            // subtext: '消息沟通平台',
            // x:'center'
        },
        legend: {
            data: ['多客服', '分销', '微小店', '微商城', '零售', '批发'],
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        calculable: true,
        grid: {
            top: 80,
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: dateArray,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '数量（条）'
            }
        ],
        series: [
            {
                name: '多客服',
                type: 'line',
                barWidth: '60%',
                data: lineAmountArray[0],
            },
            {
                name: '分销',
                type: 'line',
                barWidth: '60%',
                data: lineAmountArray[1],
            },
            {
                name: '微小店',
                type: 'line',
                barWidth: '60%',
                data: lineAmountArray[2],
            },
            {
                name: '微商城',
                type: 'line',
                barWidth: '60%',
                data: lineAmountArray[3],
            },
            {
                name: '零售',
                type: 'line',
                barWidth: '60%',
                data: lineAmountArray[4],
            },
            {
                name: '批发',
                type: 'line',
                barWidth: '60%',
                data: lineAmountArray[5],
            },
            // {
            //     name: '消息占比',
            //     type: 'pie',
            //     center: ['91.1%', '19%'],
            //     radius: '18%',
            //     data: [
            //         {name: '多客服', value: 40},
            //         {name: '分销', value:15},
            //         {name: '微小店', value: 20},
            //         {name: '微商城', value: 20},
            //         {name: '零售', value: 10},
            //         {name: '批发', value: 5}
            //     ]
            // }
        ]
    };


    return (
        <div>
            {/*{chartType=='bar' ? <ECharts option={option} style={{width: '1100px', height: '480px'}}/> : null}*/}
            {chartType == 'line' ? <ECharts option={lineOption} style={{width: '1100px', height: '480px'}}/> : null}
        </div>

    );
}

AmountMonthChart.propTypes = {
    threeWeekAgo: PropTypes.array,
    twoWeekAgo: PropTypes.array,
    oneWeekAgo: PropTypes.array,
    thisWeek: PropTypes.array,
    isBar: PropTypes.bool,
};

export default AmountMonthChart;
