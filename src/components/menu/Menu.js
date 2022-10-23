import {NavLink} from "react-router-dom";

import css from "./Menu.module.css";

const Menu = () => {

    return (
        <div className={css.Menu}>
            <NavLink to={'players'}>Players</NavLink>
            <NavLink to={'clubs'}>Clubs</NavLink>
            <NavLink to={'transfer'}>Transfer</NavLink>
        </div>
    );
};

export {Menu};