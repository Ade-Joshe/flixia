import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.css' 
import 'semantic-ui-css/semantic.min.css';
import 'jquery/dist/jquery'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
