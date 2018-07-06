import "regenerator-runtime/runtime";
import React from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux'; 
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer.jsx';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import mySaga from './redux/sagas/saga.js'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	preloadedState,
	applyMiddleware(logger, sagaMiddleware),

)

sagaMiddleware.run(mySaga)

const Index = () => (
	<Provider store={store}>
    	<BrowserRouter>
        	<App/>
    	</BrowserRouter>
    </Provider>
)


hydrate(<Index/>, document.getElementById('root'));