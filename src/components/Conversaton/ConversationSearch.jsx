import React, { PropTypes } from 'react';
import {Form, Input, Button, Select } from 'antd';
import styles from './ConversationSearch.less';

const ConversationSearch = ({
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
              initialValue: field || 'uid',
            })(
              <Select>
                <Select.Option value="uid">客服</Select.Option>
                {/*<Select.Option value="address">地址</Select.Option>*/}
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

ConversationSearch.propTypes = {
  form: PropTypes.object.isRequired,
  onSearch: PropTypes.func,
  field: PropTypes.string,
  keyword: PropTypes.string,
};

export default Form.create()(ConversationSearch);
