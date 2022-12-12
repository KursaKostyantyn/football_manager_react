import {useNavigate} from "react-router-dom";

import css from './Header.module.css'
import {useEffect, useState} from "react";


const Header = () => {
    const [isAuth, setIsAuth] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        setIsAuth(localStorage.getItem("userLogin"))
    },[localStorage])



    const register = () => {
        navigate('/register')
    }

    const login = () => {
        navigate('/login')
    }

    const exit = () => {
        localStorage.removeItem("access")
        localStorage.removeItem("userLogin")
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