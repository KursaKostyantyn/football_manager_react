import css from './Header.module.css'
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const register = () => {
        navigate('/register')
    }

    const login = () => {
        navigate('/login')
    }

    return (
        <div className={css.Header}>
            <div className={css.HeaderName}> FOOTBALL MANAGER APP</div>
            <div className={css.ButtonsDiv}>
                <button className={css.Buttons} onClick={login}>login</button>
                <button className={css.Buttons} onClick={register}>register</button>
            </div>
        </div>
    );
};

export {Header};