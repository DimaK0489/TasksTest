import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../BLL/Store";
import {setAppErrorAC} from "../../BLL/AppExpectationReducer";
import React from "react";
import style from './NotFoundPage.module.css'

export const NotFoundPage = React.memo(() => {

    const dispatch = useDispatch()
    const error = useSelector<AppRootStateType, null | string>(state => state.status.error)

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickable') {
            return
        }
        dispatch(setAppErrorAC(null))
    }
    return (
        <div className={style.error__page} >
            {error}
            <img src={'https://img.freepik.com/free-vector/404-error-with-character-error-design-template-website_114341-24.jpg?size=626&ext=jpg'}
                 alt={'pageNotFound'}/>
            <p>
                <Link to="/"> Go to Home </Link>
            </p>
        </div>
    );
})