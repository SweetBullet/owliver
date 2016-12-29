import React, {PropTypes} from 'react';
import {Table, Popconfirm, Pagination} from 'antd';

function MessageList({
    total, current, loading, dataSource,
    onPageChange,
}) {
    const columns = [{
        title: '发送人',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a href="#">{text}</a>,
    }, {
        title: '会话',
        dataIndex: 'conversation',
        key: 'conversation',
    }, {
        title: '店铺',
        dataIndex: 'shop',
        key: 'shop',
    }, {
        title: '时间',
        dataIndex: 'time',
        key: 'time',
    }, {
        title: '通道',
        dataIndex: 'channel',
        key: 'channel',
    }, {
        title: '内容',
        dataIndex: 'content',
        key: 'content',
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
                pageSize={3}
                onChange={onPageChange}
            />
        </div>
    );
}

MessageList.propTypes = {
    onPageChange: PropTypes.func,
    dataSource: PropTypes.array,
    loading: PropTypes.any,
    total: PropTypes.any,
    current: PropTypes.any,
};

export default MessageList;
