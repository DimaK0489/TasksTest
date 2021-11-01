import {Redirect, Route, Switch} from "react-router-dom";
import {StartPage} from "./Components/StartPage/StartPage";
import {UsersPageContainer} from "./Components/UsersPage/UsersPageContainer";
import {NotFoundPage} from "./Components/NotFoundPage/NotFoundPage";

export const PATH = {
    START_PAGE: '/startPage',
    USERS_PAGE: '/userPage'
}

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.START_PAGE}/>}/>

                <Route path={PATH.START_PAGE} render={ () => <StartPage/>}/>
                <Route path={PATH.USERS_PAGE} render={ () => <UsersPageContainer />}/>

                <Route path={'*'} render={ () => <NotFoundPage/>}/>
            </Switch>
        </div>
    )
}