import React, {PropTypes} from 'react';
import {Switch} from 'antd';
import ECharts from 'react-echarts';

function AmountMonthChart({
    threeWeekAgo, twoWeekAgo, oneWeekAgo, thisWeek, isBar,
}) {

    //init yAxis: date array
    var date = new Date();
    var dateArray = [];
    date.setDate(date.getDate() - 28);
    for (var i = 0; i < 28; i++) {
        date.setDate(date.getDate() + 1);
        var month = (date.getMonth() + 1) % 12;
        if(month==0)
            month=12;
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


    var dataMap = {};

    function dataFormatter(obj) {
        var pList = ['1', '2', '3', '4', '5', '6', '7'];
        var temp;
        for (var j = 0; j <= 3; j++) {
            var max = 0;
            var sum = 0;
            temp = obj[j];
            for (var i = 0; i < 7; i++) {
                max = Math.max(max, temp[i]);
                sum += temp[i];
                obj[j][i] = {
                    name: pList[i],
                    value: temp[i]
                }
            }
            obj[j + 'max'] = Math.floor(max / 100) * 100;
            obj[j + 'sum'] = sum;
        }

        return obj;
    }


    dataMap.dataDkf = dataFormatter({
        0: threeWeekAgo[0],
        1: twoWeekAgo[0],
        2: oneWeekAgo[0],
        3: thisWeek[0]

    });

    dataMap.dataFx = dataFormatter({
        0: threeWeekAgo[1],
        1: twoWeekAgo[1],
        2: oneWeekAgo[1],
        3: thisWeek[1]
    });

    dataMap.dataWxd = dataFormatter({
        0: threeWeekAgo[2],
        1: twoWeekAgo[2],
        2: oneWeekAgo[2],
        3: thisWeek[2]
    });

    dataMap.dataWsc = dataFormatter({
        0: threeWeekAgo[3],
        1: twoWeekAgo[3],
        2: oneWeekAgo[3],
        3: thisWeek[3]
    });

    dataMap.dataLs = dataFormatter({
        0: threeWeekAgo[4],
        1: twoWeekAgo[4],
        2: oneWeekAgo[4],
        3: thisWeek[4]
    });

    dataMap.dataPf = dataFormatter({
        0: threeWeekAgo[5],
        1: twoWeekAgo[5],
        2: oneWeekAgo[5],
        3: thisWeek[5]
    });


    var option = {
        baseOption: {
            timeline: {
                axisType: 'category',
                autoPlay: false,
                playInterval: 1000,
                data: [
                    {
                        value: '三周前',
                        tooltip: {
                            formatter: function (params) {
                                return params.name;
                            }
                        },
                        symbol: 'diamond',
                        symbolSize: 18
                    },
                    '两周前', '上周',
                    {
                        value: '最近7天',
                        tooltip: {
                            formatter: function (params) {
                                return params.name + "：最近情况";
                            }
                        },
                        symbol: 'diamond',
                        symbolSize: 18
                    },
                ],
                // label: {
                //     formatter: function (s) {
                //         return (new Date(s)).getFullYear();
                //     }
                // }
            },
            title: {
                subtext: '数据来自有赞'
            },
            tooltip: {},
            legend: {
                x: 'right',
                data: ['多客服', '分销', '微小店', '微商城', '零售', '批发', '多门店'],
                selected: {
                    '多门店': false,
                }
            },
            calculable: true,
            grid: {
                top: 80,
                bottom: 100
            },
            xAxis: [
                {
                    'type': 'category',
                    'axisLabel': {'interval': 0},
                    'data': [
                        '1', '\n2', '3', '\n4', '5', '\n6', '7'
                    ],
                    splitLine: {show: false}
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '消息量（条）'
                }
            ],
            series: [
                {
                    name: '多客服', type: 'bar',
                    // markPoint: {
                    //     data: [
                    //         {type: 'max', name: '最大值'},
                    //         {type: 'min', name: '最小值'}
                    //     ]
                    // },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name: '分销', type: 'bar',
                    // markPoint: {
                    //     data: [
                    //         {type: 'max', name: '最大值'},
                    //         {type: 'min', name: '最小值'}
                    //     ]
                    // },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name: '微小店', type: 'bar',
                    // markPoint: {
                    //     data: [
                    //         {type: 'max', name: '最大值'},
                    //         {type: 'min', name: '最小值'}
                    //     ]
                    // },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name: '微商城', type: 'bar',
                    // markPoint: {
                    //     data: [
                    //         {type: 'max', name: '最大值'},
                    //         {type: 'min', name: '最小值'}
                    //     ]
                    // },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name: '零售', type: 'bar',
                    // markPoint: {
                    //     data: [
                    //         {type: 'max', name: '最大值'},
                    //         {type: 'min', name: '最小值'}
                    //     ]
                    // },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name: '批发', type: 'bar',
                    // markPoint: {
                    //     data: [
                    //         {type: 'max', name: '最大值'},
                    //         {type: 'min', name: '最小值'}
                    //     ]
                    // },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name: '消息占比',
                    type: 'pie',
                    center: ['91.1%', '19%'],
                    radius: '18%'
                }
            ]
        },
        options: [
            {
                title: {text: '三周前消息量'},
                xAxis: [
                    {
                        'type': 'category',
                        'axisLabel': {'interval': 0},
                        'data': dateArray.slice(0,7),
                        splitLine: {show: false}
                    }
                ],
                series: [
                    {data: dataMap.dataDkf['0']},
                    {data: dataMap.dataFx['0']},
                    {data: dataMap.dataWxd['0']},
                    {data: dataMap.dataWsc['0']},
                    {data: dataMap.dataLs['0']},
                    {data: dataMap.dataPf['0']},
                    {
                        data: [
                            {name: '多客服', value: dataMap.dataDkf['0sum']},
                            {name: '分销', value: dataMap.dataFx['0sum']},
                            {name: '微小店', value: dataMap.dataWxd['0sum']},
                            {name: '微商城', value: dataMap.dataWsc['0sum']},
                            {name: '零售', value: dataMap.dataLs['0sum']},
                            {name: '批发', value: dataMap.dataPf['0sum']}
                        ]
                    }
                ]
            },
            {
                title: {text: '两周前消息量'},
                xAxis: [
                    {
                        'type': 'category',
                        'axisLabel': {'interval': 0},
                        'data': dateArray.slice(7,14),
                        splitLine: {show: false}
                    }
                ],
                series: [
                    {data: dataMap.dataDkf['1']},
                    {data: dataMap.dataFx['1']},
                    {data: dataMap.dataWxd['1']},
                    {data: dataMap.dataWsc['1']},
                    {data: dataMap.dataLs['1']},
                    {data: dataMap.dataPf['1']},
                    {
                        data: [
                            {name: '多客服', value: dataMap.dataDkf['1sum']},
                            {name: '分销', value: dataMap.dataFx['1sum']},
                            {name: '微小店', value: dataMap.dataWxd['1sum']},
                            {name: '微商城', value: dataMap.dataWsc['1sum']},
                            {name: '零售', value: dataMap.dataLs['1sum']},
                            {name: '批发', value: dataMap.dataPf['1sum']}
                        ]
                    }
                ]
            },
            {
                title: {text: '上周消息量'},
                xAxis: [
                    {
                        'type': 'category',
                        'axisLabel': {'interval': 0},
                        'data': dateArray.slice(14,21),
                        splitLine: {show: false}
                    }
                ],
                series: [
                    {data: dataMap.dataDkf['2']},
                    {data: dataMap.dataFx['2']},
                    {data: dataMap.dataWxd['2']},
                    {data: dataMap.dataWsc['2']},
                    {data: dataMap.dataLs['2']},
                    {data: dataMap.dataPf['2']},
                    {
                        data: [
                            {name: '多客服', value: dataMap.dataDkf['2sum']},
                            {name: '分销', value: dataMap.dataFx['2sum']},
                            {name: '微小店', value: dataMap.dataWxd['2sum']},
                            {name: '微商城', value: dataMap.dataWsc['2sum']},
                            {name: '零售', value: dataMap.dataLs['2sum']},
                            {name: '批发', value: dataMap.dataPf['2sum']}
                        ]
                    }
                ]
            },
            {
                title: {text: '近7天消息量'},
                xAxis: [
                    {
                        'type': 'category',
                        'axisLabel': {'interval': 0},
                        'data': dateArray.slice(21,28),
                        splitLine: {show: false}
                    }
                ],
                series: [
                    {data: dataMap.dataDkf['3']},
                    {data: dataMap.dataFx['3']},
                    {data: dataMap.dataWxd['3']},
                    {data: dataMap.dataWsc['3']},
                    {data: dataMap.dataLs['3']},
                    {data: dataMap.dataPf['3']},
                    {
                        data: [
                            {name: '多客服', value: dataMap.dataDkf['3sum']},
                            {name: '分销', value: dataMap.dataFx['3sum']},
                            {name: '微小店', value: dataMap.dataWxd['3sum']},
                            {name: '微商城', value: dataMap.dataWsc['3sum']},
                            {name: '零售', value: dataMap.dataLs['3sum']},
                            {name: '批发', value: dataMap.dataPf['3sum']}
                        ]
                    }
                ]
            }
        ]
    };


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
            {isBar ? <ECharts option={option} style={{width: '1100px', height: '480px'}}/> : null}
            {isBar ? null : <ECharts option={lineOption} style={{width: '1100px', height: '480px'}}/>}
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
