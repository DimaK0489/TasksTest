import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../BLL/Store";
import {getUsersTC} from "../../BLL/AppReducer";
import {Users} from "./Users/Users";

export const UsersPageContainer = () => {
    const dispatch = useDispatch()
    const users = useSelector<AppRootStateType, any>(state => state.app)

    useEffect( () => {
        dispatch(getUsersTC())
    },[dispatch])

    return (
        <Users
            users={users}
        />
    )
}