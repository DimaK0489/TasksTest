import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Routes} from "./Routes";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./BLL/Store";
import {Preloader} from './Components/Preloader/Preloader';
import {NotFoundPage} from "./Components/NotFoundPage/NotFoundPage";

function App() {
    const status = useSelector<AppRootStateType, string>(state => state.status.status)
    return (
        <div className="App">
            {/*<NotFoundPage/>*/}
            {status === 'loading' && <div className={'preLoader'}><Preloader/></div>}
            <Header/>
            <Routes/>
        </div>
    );
}

export default App;
