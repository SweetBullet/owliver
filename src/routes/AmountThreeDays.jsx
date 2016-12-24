import React, {Component, PropTypes} from 'react';
import {routerRedux} from 'dva/router';
import {connect} from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import styles from './Default.less';
import {Switch} from 'antd';
import AmountButton from '../components/Amount/AmountButton';
import AmountThreeChart from '../components/Amount/AmountThreeChart';

function AmountThreeDays({location, dispatch, amount}) {

    const {
        barOrPie, amounts,
    } = amount;


    const amountChartProps = {
        barOrPie: barOrPie,
        amounts: amounts,
    };

    function onChange(checked) {
        console.log(`switch to ${checked},barOrPie:${barOrPie}`);
        dispatch({
            type: 'amount/update',
            payload: checked,
        });
    };

    const amountButtonProps = {
        cursor: '2',
        handleChange(term){
            var path = '/amount';
            switch (term) {
                case '1':
                    dispatch(routerRedux.push({
                        pathname: '/amount',
                        query: {term},
                    }));
                    break;
                case '2':
                    dispatch(routerRedux.push({
                        pathname: '/amount3day',
                        query: {term},
                    }));
                    break;
                case '3':
                    dispatch(routerRedux.push({
                        pathname: '/amount1month',
                        query: {term},
                    }));
                    break;
                default:
                    break;
            }

        },
    }

    return (
        <MainLayout location={location}><br/>
            <div className={styles.n}>
                <AmountButton {...amountButtonProps}/> <br/>
                <Switch defaultChecked={false} unCheckedChildren="饼图" checkedChildren="返回" onChange={onChange}/>
                <br/><br/>
                <AmountThreeChart {...amountChartProps}/>
            </div>
        </MainLayout>
    );

}


AmountThreeDays.propTypes = {
    amount: PropTypes.object,
    location: PropTypes.object,
    dispatch: PropTypes.func,
}

function mapStateToProps({amount}) {
    return {amount};
}


export default connect(mapStateToProps)(AmountThreeDays);


//ES6的class带状态写法
// class AmountThreeDays extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: {
//                 title: {
//                     text: '最近三天消息量统计'
//                 },
//                 tooltip: {},
//                 legend: {
//                     data: ['消息量']
//                 },
//                 xAxis: {
//                     data: ["前天", "昨天", "今天"]
//                 },
//                 yAxis: {},
//                 series: [{
//                     name: '消息量',
//                     type: 'bar',
//                     data: [5, 20, 36]
//                 }]
//             }
//         }
//         this.onChange = this.onChange.bind(this);
//     }
//
//     onChange(checked) {
//         console.log(`switch to ${checked}`);
//         if (checked == true) {
//             console.log(`true`);
//             this.setState({
//                     count: {
//                         title: {
//                             text: '最近1天消息量统计'
//                         },
//                         tooltip: {},
//                         legend: {
//                             data: ['消息量']
//                         },
//                         xAxis: {
//                             data: ["前天", "昨天", "今天"]
//                         },
//                         yAxis: {},
//                         series: [{
//                             name: '消息量',
//                             type: 'bar',
//                             data: [5, 20, 36]
//                         }]
//                     }
//                 }
//             );
//         }
//     }
//
//
//     handleChange(term){
//         console.log(`change`)
//         var path = '/amount';
//         switch (term) {
//             case '1':
//                 path = '/amount';
//                 this.props.dispatch(routerRedux.push({
//                     pathname: path,
//                     query: {term},
//                 }));
//                 break;
//             case '2':
//                 path = '/amount3day';
//                 dispatch(routerRedux.push({
//                     pathname: path,
//                     // query: {term},
//                 }));
//                 break;
//             case '3':
//                 path = '/amount';
//                 break
//             case '4':
//                 path = '/amount';
//                 break;
//             default:
//                 break;
//         }
//
//     }
//
//     render() {
//         return (
//             <MainLayout location={location}>
//                 <div className={styles.n}>
//                     <Switch defaultChecked={false} checkedChildren="百分比" unCheckedChildren="柱形图"
//                             onChange={this.onChange}/>
//                     <br/><br/>
//                     <AmountButton cursor="2" handleChange={this.handleChange} /> <br/>
//                     <ECharts
//                         option={this.state.count}
//                         style={{width: '1000px', height: '460px'}}
//                     />
//
//                 </div>
//             </MainLayout>
//         )
//     };
// }