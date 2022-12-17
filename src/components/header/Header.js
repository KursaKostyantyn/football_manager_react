import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {userActions} from "../../redux";
import css from './Header.module.css'


const Header = () => {
    const [isAuth, setIsAuth] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setIsAuth(sessionStorage.getItem("userLogin"))
    }, [dispatch])


    const register = () => {
        navigate('/register')
    }

    const login = () => {
        navigate('/login')
    }

    const exit = () => {
        localStorage.removeItem("access")
        sessionStorage.removeItem("userLogin")
        dispatch(userActions.setUsers([]));
        navigate('/login')
    }


    return (
        <div className={css.Header}>
            <div className={css.HeaderName}> FOOTBALL MANAGER APP</div>
            <div className={css.ButtonsDiv}>
                {!isAuth && <button className={css.Buttons} onClick={login}>login</button>}
                {!isAuth && <button className={css.Buttons} onClick={register}>register</button>}
                {isAuth && <button className={css.Buttons} onClick={exit}>exit</button>}
            </div>
        </div>
    );
};

export {Header};