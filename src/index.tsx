import * as React from 'react';
import * as ReactDom from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from './reducers';

let store = createStore(reducers.app);


import {App} from './components/App';

// ReactDom.render(
//     <App />,
//     document.getElementById("example")
// )

ReactDom.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById("example")
)
