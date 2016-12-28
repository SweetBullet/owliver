import React, {PropTypes} from 'react';
import {Switch} from 'antd';
import ECharts from 'react-echarts';

function AmountMonthChart({
    dkf, fx, wxd, wsc, ls, pf, chartType,
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

    //init total amount array
    var totalArray = [0, 0, 0, 0, 0, 0];
    for (var j = 0; j < 28; j++) {
        totalArray[0] += dkf[j];
        totalArray[1] += fx[j];
        totalArray[2] += wxd[j];
        totalArray[3] += wsc[j];
        totalArray[4] += ls[j];
        totalArray[5] += pf[j];
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
        0: dkf.slice(0,7),
        1:  dkf.slice(7,14),
        2:  dkf.slice(14,21),
        3:  dkf.slice(21,28),

    });

    dataMap.dataFx = dataFormatter({
        0: fx.slice(0,7),
        1:  fx.slice(7,14),
        2:  fx.slice(14,21),
        3:  fx.slice(21,28),
    });

    dataMap.dataWxd = dataFormatter({
        0: wxd.slice(0,7),
        1:  wxd.slice(7,14),
        2:  wxd.slice(14,21),
        3:  wxd.slice(21,28),
    });

    dataMap.dataWsc = dataFormatter({
        0: wsc.slice(0,7),
        1:  wsc.slice(7,14),
        2:  wsc.slice(14,21),
        3:  wsc.slice(21,28),
    });

    dataMap.dataLs = dataFormatter({
        0: ls.slice(0,7),
        1:  ls.slice(7,14),
        2:  ls.slice(14,21),
        3:  ls.slice(21,28),
    });

    dataMap.dataPf = dataFormatter({
        0: pf.slice(0,7),
        1:  pf.slice(7,14),
        2:  pf.slice(14,21),
        3:  pf.slice(21,28),
    });


    var barOption = {
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
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                x: 'center',
                data: ['多客服', '分销', '微小店', '微商城', '零售', '批发', '多门店'],
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
                        'data': dateArray.slice(0, 7),
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
                        'data': dateArray.slice(7, 14),
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
                        'data': dateArray.slice(14, 21),
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
                        'data': dateArray.slice(21, 28),
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
                data: dkf,
            },
            {
                name: '分销',
                type: 'line',
                barWidth: '60%',
                data: fx,
            },
            {
                name: '微小店',
                type: 'line',
                barWidth: '60%',
                data: wxd,
            },
            {
                name: '微商城',
                type: 'line',
                barWidth: '60%',
                data: wsc,
            },
            {
                name: '零售',
                type: 'line',
                barWidth: '60%',
                data: ls,
            },
            {
                name: '批发',
                type: 'line',
                barWidth: '60%',
                data: pf,
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

    const pieOption = {
        title: {
            text: '最近一个月消息量',
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
                    {value: totalArray[0], name: '多客服'},
                    {value: totalArray[1], name: '分销'},
                    {value: totalArray[2], name: '微小店'},
                    {value: totalArray[3], name: '微商城'},
                    {value: totalArray[4], name: '零售'},
                    {value: totalArray[5], name: '批发'}
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
    }


    return (
        <div>
            {chartType == 'bar' ? <ECharts option={barOption} style={{width: '1100px', height: '480px'}}/> : null}
            {chartType == "line" ? <ECharts option={lineOption} style={{width: '1100px', height: '480px'}}/> : null}
            {chartType == 'pie' ? <ECharts option={pieOption} style={{width: '1100px', height: '480px'}}/> : null}
        </div>

    );
}

AmountMonthChart.propTypes = {
    dkf: PropTypes.array,
    fx: PropTypes.array,
    wxd: PropTypes.array,
    wsc: PropTypes.array,
    ls: PropTypes.array,
    pf: PropTypes.array,
    chartType: PropTypes.string,
};

export default AmountMonthChart;
