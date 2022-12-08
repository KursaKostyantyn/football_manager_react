import {useNavigate} from "react-router-dom";

import css from './Header.module.css'


const Header = () => {
    const navigate = useNavigate();
    const isAuth = localStorage.getItem("access")

    const register = () => {
        navigate('/register')
    }

    const login = () => {
        navigate('/login')
    }

    const exit = () => {
        localStorage.removeItem("access")
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