import React, {PropTypes} from 'react';
import {routerRedux} from 'dva/router';
import {connect} from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import ConversationList from '../components/Conversaton/ConversationList';
import ConversationSearch from '../components/Conversaton/ConversationSearch';
import styles from './Default.less';

function Conversation({location, dispatch, conversation}) {
    const {
        loading, list, total, current, field, keyword, percent,
    }=conversation;

    const conversationSearchProps = {
        field,
        keyword,
        onSearch(fieldsValue) {
            dispatch(routerRedux.push({
                pathname: '/conversation',
                query: {...fieldsValue, page: 1},
            }));
        },
    }

    const conversationListProps = {
        dataSource: list,
        loading,
        total,
        current,
        onPageChange(page) {
            dispatch(routerRedux.push({
                pathname: '/conversation',
                query: {field, keyword, page},
            }));
        },
    };


    return (
        <MainLayout location={location}>
            <div className={styles.n}>
                <ConversationSearch {...conversationSearchProps}/>
                <ConversationList {...conversationListProps}/>
            </div>
        </MainLayout>
    );

}


Conversation.propTypes = {
    amount: PropTypes.object,
    location: PropTypes.object,
    dispatch: PropTypes.func,
}

function mapStateToProps({conversation}) {
    return {conversation};
}

export default connect(mapStateToProps)(Conversation);