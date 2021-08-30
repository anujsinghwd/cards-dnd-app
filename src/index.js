import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
} from "react-router-dom";

import Root from "./Root"
import App from "./app";

ReactDOM.render(
    <Root><Router><App /></Router></Root>, document.getElementById('root'));
