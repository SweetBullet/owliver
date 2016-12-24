import React, {PropTypes} from 'react';
import {Switch} from 'antd';
import ECharts from 'react-echarts';

function AmountThreeChart({
    barOrPie, amounts
}) {

    var chartBarOption = {
        title: {
            text: '最近三天消息量统计',
            subtext: '消息沟通平台'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['多客服', '分销', '微小店', '微商城', '零售', '批发'],
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {show: true, readOnly: true},
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
        xAxis: [
            {
                type: 'category',
                data: ['前天', '昨天', '今天'],
                splitLine: {show: false}
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
                type: 'bar',
                data: amounts[0],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name: '分销',
                type: 'bar',
                data: amounts[1],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name: '微小店',
                type: 'bar',
                data: amounts[2],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name: '微商城',
                type: 'bar',
                data: amounts[3],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name: '零售',
                type: 'bar',
                data: amounts[4],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name: '批发',
                type: 'bar',
                data: amounts[5],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            // {
            //     name: '占比',
            //     type: 'pie',
            //     center: ['90%', '30%'],
            //     radius: [0, '30%'],
            // }
        ]
    }


    var chartPieOption = {
        title: {
            text: '最近三天消息量',
            subtext: '各个通道所占比例',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['多客服', '分销', '微小店', '微商城', '零售', '批发']
        },
        series: [
            {
                name: '通道',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 1548, name: '多客服'},
                    {value: 310, name: '分销'},
                    {value: 234, name: '微小店'},
                    {value: 135, name: '微商城'},
                    {value: 154, name: '零售'},
                    {value: 20, name: '批发'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };


    function getOption(barOrPie) {
        return barOrPie === 'bar' ? chartBarOption : chartPieOption;
    }


    return (
        <div>
            <ECharts option={getOption(barOrPie)} style={{width: '1100px', height: '480px'}}/>
        </div>
    );
}

AmountThreeChart.propTypes = {
    barOrPie: PropTypes.any,
    amounts: PropTypes.array,
};

export default AmountThreeChart;
