import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.scss";
import {Provider} from 'react-redux'
import store from './store'


var mountNode = document.getElementById("app");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    mountNode
)