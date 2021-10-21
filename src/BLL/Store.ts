import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "./AppReducer";

const reducer = combineReducers({
    users: appReducer
})
export const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof reducer>

// @ts-ignore
window.store = store