import React, {PropTypes} from 'react';
import {Link} from 'dva/router';
import {Button, Radio} from 'antd';


const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function AmountButton({
    cursor,
    handleChange,
}) {


    function onChange(e) {
        const str = e.target.value;
        handleChange(str);
        // console.log(`radio checked:${e.target.value}`);

    }

    return (
        <div>
            <RadioGroup size="large" onChange={onChange} defaultValue={cursor}>
                <RadioButton value="1">今日消息</RadioButton>
                <RadioButton value="2">最近三天</RadioButton>
                <RadioButton value="3">最近一周</RadioButton>
                <RadioButton value="4">最近一月</RadioButton>
            </RadioGroup>
        </div>
    );
}

AmountButton.propTypes = {
    handleChange:PropTypes.func,
}

export default AmountButton;