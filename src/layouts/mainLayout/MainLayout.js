import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

import css from './MainLayout.module.css'
import {Header} from "../../components/header";


const MainLayout = () => {
    const {errors} = useSelector(state => state.auth);

    return (
        <div className={css.Wrap}>
            <div>
                <Header/>
            </div>

            <div className={css.Content}>
                <div>
                    <Outlet/>
                </div>
                <div>
                    {errors && JSON.stringify(errors)}
                </div>
            </div>
        </div>
    );
};

export {MainLayout};