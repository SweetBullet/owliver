import React, {PropTypes} from 'react';
import {Switch} from 'antd';
import ECharts from 'react-echarts';

function AmountMonthChart({
    threeWeekAgo, twoWeekAgo, oneWeekAgo, thisWeek, dateInfo,
}) {


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
                                return params.name ;
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
                                return params.name+"：最近情况" ;
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
                data: ['多客服', '分销', '微小店', '微商城', '零售', '批发'],
                // selected: {
                //     'GDP': false, '金融': false, '房地产': false
                // }
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
                {name: '多客服', type: 'bar'},
                {name: '分销', type: 'bar'},
                {name: '微小店', type: 'bar'},
                {name: '微商城', type: 'bar'},
                {name: '零售', type: 'bar'},
                {name: '批发', type: 'bar'},
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
                        'data': dateInfo[0],
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
                        'data': dateInfo[1],
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
                        'data': dateInfo[2],
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
                        'data': dateInfo[3],
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


    return (
        <div>
            <ECharts option={option} style={{width: '1100px', height: '480px'}}/>
        </div>
    );
}

AmountMonthChart.propTypes = {
    threeWeekAgo: PropTypes.array,
    twoWeekAgo: PropTypes.array,
    oneWeekAgo: PropTypes.array,
    thisWeek: PropTypes.array,
    date: PropTypes.array,
};

export default AmountMonthChart;
