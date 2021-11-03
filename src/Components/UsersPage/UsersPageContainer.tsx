import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../BLL/Store";
import {deleteUserAC, getUsersTC} from "../../BLL/AppReducer";
import React, {ChangeEvent, useEffect, useState} from "react";
import {Users} from "./Users/Users";
import {UsersDataType} from "../../DAL/API";
import {AddNewUser} from "../AddFormUser/AddUserForm";
import {SearchUser} from "../SearchUser/SearchUser";
import style from './UsersPageContainer.module.css'

export const UsersPageContainer = React.memo(() => {
    const dispatch = useDispatch()
    const users = useSelector<AppRootStateType, UsersDataType[]>(state => state.app)
    const [foundUser, setFoundUser] = useState<UsersDataType[]>(users)

    useEffect(() => {
        dispatch(getUsersTC())
    }, [dispatch])
    useEffect(() => {
        setFoundUser(users)
    }, [users])

    const deleteCallbackHandler = (id: number | string) => {
        dispatch(deleteUserAC(id))
    }
    const searchHandler = (ev: ChangeEvent<HTMLInputElement>) => {
        const value = ev.currentTarget.value
        const results = users.filter((user) => {
            return user.first_name.toLowerCase().indexOf(value) > -1
                || user.last_name.toLowerCase().indexOf(value) > -1
                || user.email.toLowerCase().indexOf(value) > -1
        })
        setFoundUser(results)
    }
    return (
        <div className={style.container__comp}>
            <Users foundUsers={foundUser}
                   deleteUserCallback={deleteCallbackHandler}
            />
            <SearchUser searchHandler={searchHandler}/>
            <AddNewUser/>
        </div>
    )
})