import React, {PropTypes} from 'react';
import {Table, Popconfirm, Pagination} from 'antd';

function AmountList({
    total, current, loading, dataSource,
    onPageChange,
}) {
    const columns = [{
        title: '通道',
        dataIndex: 'channel',
        key: 'channel',
        render: (text) => <a href="#">{text}</a>,
    }, {
        title: '消息量',
        dataIndex: 'amount',
        key: 'amount',
    },
        // {
        //     title: '时间',
        //     dataIndex: 'time',
        //     key: 'time',
        // }, {
        //     title: '内容',
        //     dataIndex: 'content',
        //     key: 'content',
        // }
        ];

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
                pageSize={10}
                onChange={onPageChange}
            />
        </div>
    );
}

AmountList.propTypes = {
    onPageChange: PropTypes.func,
    dataSource: PropTypes.array,
    loading: PropTypes.any,
    total: PropTypes.any,
    current: PropTypes.any,
};

export default AmountList;
