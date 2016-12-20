import React, {PropTypes} from 'react';
import {Table, Popconfirm, Pagination} from 'antd';

function ConversationList({
    total, current, loading, dataSource,
    onPageChange,
}) {
    const columns = [{
        title: '序号',
        dataIndex: 'id',
        key: 'id',
    }, {
        title: '客服uid',
        dataIndex: 'uid',
        key: 'uid',
    }, {
        title: '客服昵称',
        dataIndex: 'nickname',
        key: 'nickname',
        render: (text) => <a href="#">{text}</a>,
    }, {
        title: '会话',
        dataIndex: 'conversation',
        key: 'conversation',
    }, {
        title: '通道',
        dataIndex: 'channel',
        key: 'channel',
    }, {
        title: '创建时间',
        dataIndex: 'time',
        key: 'time',
    }];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={dataSource}
                loading={loading}
                rowKey={record => record.id}
                pagination={false}
            />
            <Pagination
                className="ant-table-pagination"
                total={total}
                current={current}
                pageSize={6}
                onChange={onPageChange}
            />
        </div>
    );
}

ConversationList.propTypes = {
    onPageChange: PropTypes.func,
    dataSource: PropTypes.array,
    loading: PropTypes.any,
    total: PropTypes.any,
    current: PropTypes.any,
};

export default ConversationList;
