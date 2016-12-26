import React, {PropTypes} from 'react';
import ECharts from 'react-echarts';

function AmountTodayChart({
    thisWeekAmounts,
}) {

    var sum = 0;
    var percents = [];
    for (var i = 0; i < 6; i++) {
        sum += thisWeekAmounts[i][6];
    }
    for (var i = 0; i < 6; i++) {
        percents[i] = (thisWeekAmounts[i][6] / sum).toFixed(2) * 100;
    }


    const option = {

        // color: ['#3398DB'],
        title: {
            text: '今日消息量统计',
            // subtext: '消息沟通平台',
            // x:'center'
        },
        tooltip: {},
        toolbox: {
            show: true,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        grid: {
            top: 80,
            bottom: 100
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['多客服', '分销', '微小店', '微商城', '零售', '批发', ''],
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
                name: '消息量',
                type: 'bar',
                barWidth: '60%',
                data: [
                    {name: '多客服', value: thisWeekAmounts[0][6], itemStyle: {normal: {color: '#7cb5ec'}}},
                    {name: '分销', value: thisWeekAmounts[1][6], itemStyle: {normal: {color: '#434348'}}},
                    {name: '微小店', value: thisWeekAmounts[2][6], itemStyle: {normal: {color: '#90ed7d'}}},
                    {name: '微商城', value: thisWeekAmounts[3][6], itemStyle: {normal: {color: '#f7a35c'}}},
                    {name: '零售', value: thisWeekAmounts[4][6], itemStyle: {normal: {color: '#8085e9'}}},
                    {name: '批发', value: thisWeekAmounts[5][6], itemStyle: {normal: {color: '#f15c80'}}},
                    {value: 0}]
            },
            {
                name: '消息占比',
                type: 'pie',
                center: ['89.9%', '30%'],
                radius: '18%',
                data: [
                    {name: '多客服', value: percents[0], itemStyle: {normal: {color: '#7cb5ec'}}},
                    {name: '分销', value: percents[1], itemStyle: {normal: {color: '#434348'}}},
                    {name: '微小店', value: percents[2], itemStyle: {normal: {color: '#90ed7d'}}},
                    {name: '微商城', value: percents[3], itemStyle: {normal: {color: '#f7a35c'}}},
                    {name: '零售', value: percents[4], itemStyle: {normal: {color: '#8085e9'}}},
                    {name: '批发', value: percents[5], itemStyle: {normal: {color: '#f15c80'}}}
                ]
            }
        ]
    };


    return (
        <div>
            <div>
                <ECharts option={option} style={{width: '1000px', height: '450px'}}/>
            </div>
        </div>


    );
}

AmountTodayChart.propTypes = {
    thisWeekAmounts: PropTypes.array,
};

export default AmountTodayChart;
