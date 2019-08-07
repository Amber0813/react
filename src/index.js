import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App/layout/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './App/store/configureStore';
import ScrollToTop from './App/common/util/ScrollToTop'; 


const store = configureStore()
ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
        <ScrollToTop>
            <App />
        </ScrollToTop>
        </BrowserRouter>, 
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
