import React, {PropTypes} from 'react';
import {Form, Input, Button, Select, DatePicker} from 'antd';
import styles from './MessageSearch.less';

const MessageSearch = ({
    field, keyword,
    onSearch,
    form: {
        getFieldDecorator,
        validateFields,
        getFieldsValue,
    },
}) => {

    const RangePicker = DatePicker.RangePicker;

    function handleSubmit(e) {
        e.preventDefault();
        validateFields((errors) => {
            if (!!errors) {
                return;
            }
            onSearch(getFieldsValue());
        });
    }

    function range(start, end) {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }

    function disabledDate(current) {
        // can not select days before today and today
        return current && current.valueOf() < Date.now();
    }


    function disabledRangeTime(_, type) {
        if (type === 'start') {
            return {
                disabledHours: () => range(0, 60).splice(4, 20),
                disabledMinutes: () => range(30, 60),
                disabledSeconds: () => [55, 56],
            };
        }
        return {
            disabledHours: () => range(0, 60).splice(20, 4),
            disabledMinutes: () => range(0, 31),
            disabledSeconds: () => [55, 56],
        };
    }

    return (
        <div className={styles.normal}>
            <div className={styles.search}>
                <Form inline onSubmit={handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('field', {
                            initialValue: field || 'conversation',
                        })(
                            <Select>
                                <Select.Option value="name">名字</Select.Option>
                                <Select.Option value="conversation">会话</Select.Option>
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                    >
                        {getFieldDecorator('keyword', {
                            initialValue: keyword || '',
                        })(
                            <Input type="text"/>
                        )}
                    </Form.Item>
                    <Form.Item hasFeedback>
                        {getFieldDecorator('time', {

                        })(
                            <RangePicker disabledDate={disabledDate} disabledTime={disabledRangeTime}
                                         showTime={{hideDisabledOptions: true}}/>
                        )}
                    </Form.Item>
                    <Button style={{marginRight: '10px'}} type="primary" htmlType="submit">搜索</Button>
                </Form>
            </div>
        </div>
    );
};

MessageSearch.propTypes = {
    form: PropTypes.object.isRequired,
    onSearch: PropTypes.func,
    onAdd: PropTypes.func,
    field: PropTypes.string,
    keyword: PropTypes.string,
};

export default Form.create()(MessageSearch);
