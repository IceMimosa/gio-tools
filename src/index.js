import dva from 'dva';
import createLoading from 'dva-loading';
import './index.scss';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
app.model(require('./models/user').default);
app.model(require('./models/runJobs').default);
app.model(require('./models/exportLinks').default);
app.model(require('./models/qs').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
