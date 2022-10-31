import css from './LoggedInLayout.module.css'
import {Header} from "../../components/header";
import {Outlet} from "react-router-dom";
import {Menu} from "../../components";

const LoggedInLayout = () => {
    return (
        <div className={css.Wrap}>
            <div>
                <Header/>
            </div>
            <div>
                <Menu/>
            </div>
            <div className={css.Content}>
                <Outlet/>
            </div>
        </div>
    );
};

export {LoggedInLayout};
