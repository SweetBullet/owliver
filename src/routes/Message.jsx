import React, {PropTypes} from 'react';
import {routerRedux} from 'dva/router';
import {connect} from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import styles from './Message.less';
import MessageList from '../components/Message/MessageList';
import MessageSearch from '../components/Message/MessageSearch';

function Message({location, dispatch, message}) {
    const {
        loading, list, total, current, field, keyword,
        currentItem, modalVisible, modalType
    } = message;

    const messageListProps = {
        dataSource:
        list,
        loading,
        total,
        current,
        onPageChange(page) {
            dispatch(routerRedux.push({
                pathname: '/message',
                query: {field, keyword, page},
            }));
        },
    };

    const messageSearchProps = {
        field,
        keyword,
        onSearch(fieldsValue) {
            dispatch(routerRedux.push({
                pathname: '/message',
                query: {...fieldsValue, page: 1},
            }));
        },
    };

    return (
        <MainLayout location={location}>
            <div className={styles.normal}>
                <MessageSearch {...messageSearchProps} />
                <MessageList {...messageListProps} />
            </div>
        </MainLayout>
);
}

Message.propTypes = {
    message: PropTypes.object,
    location: PropTypes.object,
    dispatch: PropTypes.func,
};

function mapStateToProps({message}) {
    return {message};
}

export default connect(mapStateToProps)(Message);
