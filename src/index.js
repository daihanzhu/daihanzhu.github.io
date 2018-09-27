import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

import ReactGA from 'react-ga';

ReactGA.initialize('UA-106973282-1');
ReactGA.pageview('/homepage');

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
