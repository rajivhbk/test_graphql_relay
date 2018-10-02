import * as React from 'react';
import ReactDOM from 'react-dom';
import API from './API';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { rootReducer } from './reducers';
import { rootSaga } from './sagas';

const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
  });

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

// then run the saga
sagaMiddleware.run(rootSaga);

export default class App extends React.Component {
    componentDidMount () {
        console.log("App mounted");
        API.fetchLinks();
    }
    render () {
        return <div>Hello World!</div>
    };
}
