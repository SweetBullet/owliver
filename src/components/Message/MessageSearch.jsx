import React, { PropTypes } from 'react';
import { Form, Input, Button, Select } from 'antd';
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


  function handleSubmit(e) {
    e.preventDefault();
    validateFields((errors) => {
      if (!!errors) {
        return;
      }
      onSearch(getFieldsValue());
    });
  }

  return (
    <div className={styles.normal}>
      <div className={styles.search}>
        <Form inline onSubmit={handleSubmit}>
          <Form.Item>
            {getFieldDecorator('field', {
              initialValue: field || 'name',
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
              <Input type="text" />
            )}
          </Form.Item>
          <Button style={{ marginRight: '10px' }} type="primary" htmlType="submit">搜索</Button>
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
