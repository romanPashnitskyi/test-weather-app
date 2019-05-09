import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

import appReducer from './reducers/appReducer';
import settingsReducer from './reducers/settingsReducer';

export default createStore(
    combineReducers({
        app: appReducer,
        settings: settingsReducer,
        routing: routerReducer
    }),
    {},
    applyMiddleware(logger, thunk)
)
