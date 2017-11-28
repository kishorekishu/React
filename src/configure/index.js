import { compose, applyMiddleware, createStore } from "redux";

import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../redux';

import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const logger = store => next => action => {
    return next(action);
};

export const history = createHistory()

export default function configureStore() {

   const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(logger, routerMiddleware(history)))
  );
   
   
    return store;
}