import css from './MainLayout.module.css'
import {Outlet} from "react-router-dom";
import {Menu} from "../../components";
import {Header} from "../../components/header";

const MainLayout = () => {

    return (
        <div className={css.wrap}>
            <div className={css.header}>
                <Header/>
            </div>
            <div>
                <Menu/>
            </div>
            <div className={css.content}>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};