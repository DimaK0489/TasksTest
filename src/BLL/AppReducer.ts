import {Dispatch} from "redux";
import {API, ResponseType, UsersDataType} from "../DAL/API";
import {setAppStatusAC} from "./AppExpectationReducer";

//types Action
export type ActionType = SetUsersActionType | DeleteUserActionType
export type SetUsersActionType = ReturnType<typeof setUsersAC>
export type DeleteUserActionType = ReturnType<typeof deleteUserAC>

export enum ACTION_TYPE {
    GET_USERS = 'GET_USERS',
    DELETE_USER = 'DElETE_USER',
}

const initialState: UsersDataType[] = []

//reducer
export const appReducer = (state: Array<UsersDataType> = initialState, action: ActionType): Array<UsersDataType> => {
    switch (action.type) {
        case ACTION_TYPE.GET_USERS:
            return action.users.data.map(u => u)
        case ACTION_TYPE.DELETE_USER:
            return state.filter( (u => u.id !== action.id))
        default:
            return state
    }
}

//actions
export const setUsersAC = (users: ResponseType) => ({type: ACTION_TYPE.GET_USERS, users} as const)
export const deleteUserAC = (id: number | string) => ({type: ACTION_TYPE.DELETE_USER, id} as const)

//thunk
export const getUsersTC = () => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    API.getUsers()
        .then((res) => {
            dispatch(setUsersAC(res.data))
            dispatch(setAppStatusAC('succeeded'))
        })
}