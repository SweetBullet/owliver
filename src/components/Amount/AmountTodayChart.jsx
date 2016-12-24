import React, {PropTypes} from 'react';
import ECharts from 'react-echarts';

function AmountTodayChart({
    
}) {


    const option={

        // baseOption:{
        //
        // }


        color: ['#3398DB'],
        title:{
            text: '今日消息量统计',
            // subtext: '消息沟通平台',
            // x:'center'
        },
        legend: {
            data: ['消息量'],
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        toolbox: {
            show : true,
            feature : {
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
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
        xAxis : [
            {
                type : 'category',
                data : ['多客服', '分销', '微小店', '微商城', '零售', '批发',''],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type: 'value',
                name: '数量（条）'
            }
        ],
        series : [
            {
                name:'消息量',
                type:'bar',
                barWidth: '60%',
                data:[400, 100, 200, 334, 100, 12,0]
            }, {
                name: '消息占比',
                type: 'pie',
                center: ['91.1%', '19%'],
                radius: '18%',
                data: [
                    {name: '多客服', value: 40},
                    {name: '分销', value:15},
                    {name: '微小店', value: 20},
                    {name: '微商城', value: 20},
                    {name: '零售', value: 10},
                    {name: '批发', value: 5}
                ]
            }
        ]
    };
    
    return (
        <div>
            <ECharts option={option} style={{width: '1000px', height: '450px'}}/>
        </div>
    );
}

AmountTodayChart.propTypes = {
    
};

export default AmountTodayChart;
