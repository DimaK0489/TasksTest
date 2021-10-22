import {UsersDataType} from "../../../DAL/API";

type UsersPropsType = {
    users: UsersDataType
}

export const Users = (props: UsersPropsType) => {
    return (
        <div>
            <li> {props.users.first_name}</li>
            <li> {props.users.last_name}</li>
            <li> {props.users.email}</li>
        </div>
    )
}