import React from 'react';
import {Router, Route} from 'dva/router';
import HomePage from './routes/HomePage';
import NotFound from './routes/NotFound';
import Users from './routes/Users';
import Message from './routes/Message';
import Amount from './routes/Amount';
import Conversation from './routes/Conversation';
import AmountThreeDays from './routes/AmountThreeDays';
import AmountWeek from './routes/AmountWeek';
import AmountMonth from './routes/AmountMonth';

/* eslint react/prop-types:0 */
export default function ({history}) {
    return (
        <Router history={history}>
            <Route path="/" component={HomePage}/>
            <Route path="/users" component={Users}/>
            <Route path="/message" component={Message}/>
            <Route path="/amount" component={Amount}/>
            <Route path="/amount3day" component={AmountThreeDays}/>
            <Route path="/amount1week" component={AmountWeek}/>
            <Route path="/amount1month" component={AmountMonth}/>
            <Route path="/conversation" component={Conversation}/>
            <Route path="*" component={NotFound}/>
        </Router>
    );
}
