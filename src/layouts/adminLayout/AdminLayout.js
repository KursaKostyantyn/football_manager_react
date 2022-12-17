import {Outlet} from "react-router-dom";

import css from './AdminLayout.module.css'

const AdminLayout = () => {
    return (
        <div className={css.Wrap}>
            <Outlet/>
        </div>
    );
};

export {AdminLayout};