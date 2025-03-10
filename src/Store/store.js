import {createStore, combineReducers,applyMiddleware } from 'redux';
import { reducer as reduxformReducer } from 'redux-form';
import createSagaMiddleware from "redux-saga"
import mysaga from '../Store/Saga/saga';
import History from './Reducer/HistoryrReducer';
import AuthReducer from './Reducer/Reducer';

const SagaMiddleware= createSagaMiddleware();
const Reducer = combineReducers({
    form:reduxformReducer,
    authReducer: AuthReducer,
    userHistory: History,  
})
const Store = createStore(Reducer,applyMiddleware(SagaMiddleware));
SagaMiddleware.run(mysaga);
export default Store