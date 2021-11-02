import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../BLL/Store";
import {deleteUserAC, getUsersTC} from "../../BLL/AppReducer";
import {useEffect} from "react";
import {Users} from "./Users/Users";
import {UsersDataType} from "../../DAL/API";
import {AddNewUser} from "../AddFormUser/AddUserForm";

export const UsersPageContainer = () => {
    const dispatch = useDispatch()
    const users = useSelector<AppRootStateType, UsersDataType[]>(state => state.app)

    useEffect(() => {
        dispatch(getUsersTC())
    }, [dispatch])

    const deleteCallbackHandler = (id: number | string) => {
        dispatch(deleteUserAC(id))
    }
    return (
        <div>
            <Users
                   users={users}
                   deleteUserCallback={deleteCallbackHandler}
            />
            <AddNewUser/>
        </div>
    )
}