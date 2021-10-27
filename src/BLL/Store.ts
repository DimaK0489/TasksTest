import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "./AppReducer";
import {appExpectationReducer} from "./AppExpectationReducer";

const reducer = combineReducers({
    app: appReducer,
    status: appExpectationReducer
})
export const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof reducer>

// @ts-ignore
window.store = store