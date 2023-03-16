import React from 'react';
import './index.module.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from 'react-redux';
import {BrowserRouter, Routes} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        {/*<Routes>*/}
            <Provider store={store}>
                {/*<Routes>*/}
                <App/>
                {/*</Routes>*/}
            </Provider>
        {/*</Routes>*/}
    </BrowserRouter>,
    document.getElementById('root'));

reportWebVitals();
