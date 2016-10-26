import * as React from 'react';
import * as ReactDom from 'react-dom';

import { createStore } from 'redux'

import {App} from './components/App';

ReactDom.render(
    <App />,
    document.getElementById("example")
)
