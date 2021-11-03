import React, {ChangeEvent, useCallback} from "react";
import {useDispatch} from "react-redux";
import {getUsersTC} from "../../BLL/AppReducer";
import style from './SearchUser.module.css'

type SearchUserPropsType = {
    searchHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchUser: React.FC<SearchUserPropsType> = React.memo(({searchHandler}) => {
    const dispatch = useDispatch()
    const resetSettings = useCallback(function () {
        dispatch(getUsersTC())
    }, [dispatch])

    return (
        <div className={style.container__search}>
            <input
                type="search"
                className={style.input_search}
                placeholder="Search user list"
                onChange={searchHandler}
            />
            <button className={style.button__res} onClick={resetSettings}>Reset</button>
        </div>
    );
})