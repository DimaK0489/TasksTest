import {UsersDataType} from "../../../DAL/API";
import style from './Users.module.css'

type UsersPropsType = {
    users: UsersDataType[]
    deleteUserCallback: (id: number | string) => void
}

export const Users = (props: UsersPropsType) => {
    const deleteCallbackHandler = (id: string | number) => {
        props.deleteUserCallback(id)
    }
    return (
        <div className={style.list__users}>
            {
                props.users.map(u =>
                <div>
                    {u.first_name} {u.last_name} {u.email}
                    <button className={style.button__del} onClick={() => deleteCallbackHandler(u.id)}>Delete</button>
                </div>)
            }
        </div>
    )
}