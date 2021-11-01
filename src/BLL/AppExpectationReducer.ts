// types
export type RequestStatusType = 'loading' | 'succeeded'
type InitialStateType = typeof initialState
export type ExpectationActionType = ReturnType<typeof setAppStatusAC> | ReturnType<typeof setAppErrorAC>

export enum ACTION_TYPE {
    APP_STATUS = 'APP_STATUS',
    APP_ERROR = 'APP_ERROR'
}

const initialState = {
    status: 'succeeded' as RequestStatusType,
    error: null as null | string
}

//reducer
export const appExpectationReducer = (state: InitialStateType = initialState, action: ExpectationActionType): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPE.APP_STATUS:
            return {...state, status: action.status}
        case ACTION_TYPE.APP_ERROR:
            return {...state, error: action.error}
        default:
            return state
    }
}

// Action
export const setAppStatusAC = (status: RequestStatusType) => ({type: ACTION_TYPE.APP_STATUS, status} as const)
export const setAppErrorAC = (error: null | string) => ({type: ACTION_TYPE.APP_ERROR, error} as const)