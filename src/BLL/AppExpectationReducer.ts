// types
export type RequestStatusType = 'loading' | 'succeeded'
type InitialStateType = typeof initialState
export type ExpectationActionType = ReturnType<typeof setAppStatusAC>

export enum ACTION_TYPE {
    APP_STATUS = 'APP_STATUS'
}

const initialState = {
    status: 'loading' as RequestStatusType
}

//reducer
export const appExpectationReducer = (state: InitialStateType = initialState, action: ExpectationActionType): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPE.APP_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

// Action
export const setAppStatusAC = (status: RequestStatusType) => {
    return {type: ACTION_TYPE.APP_STATUS, status}
}