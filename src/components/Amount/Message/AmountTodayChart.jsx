import React, {PropTypes} from 'react';
import ECharts from 'react-echarts';

function AmountTodayChart({
    dkf,
    fx,
    wxd,
    wsc,
    ls,
    pf,
}) {

    var sum = dkf[27] + fx[27] + wxd[27] + wsc[27] + ls[27] + pf[27];
    var percents = [];
    percents[0] = (dkf[27] / sum).toFixed(2) * 100;
    percents[1] = (fx[27] / sum).toFixed(2) * 100;
    percents[2] = (wxd[27] / sum).toFixed(2) * 100;
    percents[3] = (wsc[27] / sum).toFixed(2) * 100;
    percents[4] = (ls[27] / sum).toFixed(2) * 100;
    percents[5] = (pf[27] / sum).toFixed(2) * 100;


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
                    {name: '多客服', value: dkf[27], itemStyle: {normal: {color: '#7cb5ec'}}},
                    {name: '分销', value: fx[27], itemStyle: {normal: {color: '#434348'}}},
                    {name: '微小店', value: wxd[27], itemStyle: {normal: {color: '#90ed7d'}}},
                    {name: '微商城', value: wsc[27], itemStyle: {normal: {color: '#f7a35c'}}},
                    {name: '零售', value: ls[27], itemStyle: {normal: {color: '#8085e9'}}},
                    {name: '批发', value: pf[27], itemStyle: {normal: {color: '#f15c80'}}},
                    {value: 0}

                ]
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
    dkf: PropTypes.array,
    fx: PropTypes.array,
    wxd: PropTypes.array,
    wsc: PropTypes.array,
    ls: PropTypes.array,
    pf: PropTypes.array,
};

export default AmountTodayChart;
