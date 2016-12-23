import React, {PropTypes} from 'react';
import {Progress} from 'antd';

function AmountProgress({
    dkf, wxd, wsc, fx, pf, ls
}) {

    return (

        <div>
            <br/><br/>
            <Progress percent={dkf} type="circle" width={132} format={percent => `dkf:${percent}％`} status="active"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Progress percent={fx} type="circle" width={132} format={percent => `fx:${percent}％`} status="active"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Progress percent={wxd} type="circle" width={132} format={percent => `wxd:${percent}％`} status="active"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Progress percent={wsc} type="circle" width={132} format={percent => `wsc:${percent}％`} status="active"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Progress percent={pf} type="circle" width={132} format={percent => `pf:${percent}％`} status="active"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Progress percent={ls} type="circle" width={132} format={percent => `ls:${percent}％`} status="active"/>
        </div>
    );
}

AmountProgress.propTypes = {
    dkf: PropTypes.number,
    wxd: PropTypes.number,
    wsc: PropTypes.number,
    fx: PropTypes.number,
    pf: PropTypes.number,
    ls: PropTypes.number,
}

export default AmountProgress;