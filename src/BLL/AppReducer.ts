import {Dispatch} from "redux";
import {API, ResponseType, UsersDataType} from "../DAL/API";

//types Action
export type InitialState = UsersDataType[]
export type ActionType = SetUsersActionType
export type SetUsersActionType = ReturnType<typeof setUsersAC>

export enum ACTION_TYPE {
    GET_USERS = 'GET_USERS'
}

const initState: InitialState = []

//reducer
export const appReducer = (state: InitialState = initState, action: ActionType): InitialState => {
    switch (action.type) {
        case ACTION_TYPE.GET_USERS:
            return action.users.data.map(u => u)
        default:
            return state
    }

}

//actions
export const setUsersAC = (users: ResponseType) => ({type: ACTION_TYPE.GET_USERS, users} as const)

//thunk
export const getUsersTC = () => (dispatch: Dispatch) => {
    API.getUsers()
        .then((res) => {
            dispatch(setUsersAC(res.data))
        })
}