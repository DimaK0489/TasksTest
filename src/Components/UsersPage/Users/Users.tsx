import {UsersDataType} from "../../../DAL/API";
import style from './Users.module.css'
import React from "react";

type UsersPropsType = {
    foundUsers: UsersDataType[]
    deleteUserCallback: (id: number | string) => void
}

export const Users = React.memo((props: UsersPropsType) => {
    const deleteCallbackHandler = (id: string | number) => {
        props.deleteUserCallback(id)
    }
    return (
        <div className={style.list__users}>
            {
                props.foundUsers.map(u =>
                <div key={u.id}>
                    {u.first_name} {u.last_name} {u.email}
                    <button className={style.button__del} onClick={() => deleteCallbackHandler(u.id)}>Delete</button>
                </div>)
            }
        </div>
    )
})