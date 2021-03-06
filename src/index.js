import './index.html';
import './index.less';
import dva from 'dva';
import { browserHistory } from 'dva/router';

// 1. Initialize
const app = dva({
  history: browserHistory,
});

// 2. Model
app.model(require('./models/users'));
app.model(require('./models/message'));
app.model(require('./models/amount'));
app.model(require('./models/conversation'));
// app.model(require('./models/amountCharts'));

// 3. Router
app.router(require('./router'));

// 4. Start
app.start('#root');
