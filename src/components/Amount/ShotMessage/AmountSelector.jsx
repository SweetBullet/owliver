import React, {PropTypes} from 'react';
import {Link} from 'dva/router';
import {Select} from 'antd';


const Option = Select.Option;

function AmountSelector({
    handleSelectorChange,
}) {



    function handleChange(value) {
        console.log(`selected ${value}`);
        handleSelectorChange(value);

    }


    return (
        <div>
            <Select size="large" defaultValue="柱形图" style={{ width: 80 }} onChange={handleChange}>
                <Option value="bar">柱形图</Option>
                <Option value="line">折线图</Option>
                <Option value="pie">饼图</Option>
            </Select>
        </div>
    );
}

AmountSelector.propTypes = {
}

export default AmountSelector;