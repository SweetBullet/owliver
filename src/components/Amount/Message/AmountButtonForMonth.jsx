import React, {PropTypes} from 'react';
import {Select, Radio} from 'antd';
import styles from './Default.less';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function AmountButtonForMonth({
    cursor,
    handleChange,
    handleSelectorChange,
    defaultSelector,
}) {


    function onChange(e) {
        const str = e.target.value;
        handleChange(str);
    }

    function handleTypeChange(value) {
        handleSelectorChange(value)
    }

    return (
        <div className={styles.normal}>
            <div className={styles.button}>
                <RadioGroup size="large" onChange={onChange} defaultValue={cursor}>
                    <RadioButton value="1">今日消息</RadioButton>
                    <RadioButton value="2">最近三天</RadioButton>
                    <RadioButton value="3">最近一月</RadioButton>
                </RadioGroup>
            </div>
            <div className={styles.selector}>
                <Select size="large" defaultValue={defaultSelector} style={{width: 80}} onChange={handleTypeChange}>
                    <Option value="bar">柱形图</Option>
                    <Option value="line">折线图</Option>
                    <Option value="pie">饼图</Option>
                </Select>
            </div>
        </div>
    );
}

AmountButtonForMonth.propTypes = {
    handleChange: PropTypes.func,
    handleSelectorChange:PropTypes.func,
    cursor:PropTypes.number,
    defaultSelector:PropTypes.string,

}

export default AmountButtonForMonth;