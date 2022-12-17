import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from "./Menu.module.css";
import {userActions} from "../../redux";

const Menu = () => {
    const {users} = useSelector(state => state.users);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const switchToAdminPanel = () => {
        navigate('/admin')
    }

    const switchToMainPanel = () => {
        navigate('/players')
        dispatch(userActions.setUsers([]))
    }

    return (
        <div className={css.Wrap}>
            <div className={css.Menu}>
                {users.length === 0 && <NavLink to={'players'}>Players</NavLink>}
                {users.length === 0 && <NavLink to={'clubs'}>Clubs</NavLink>}
                {users.length === 0 && <NavLink to={'transfer'}>Transfer</NavLink>}
                {users.length !== 0 && <NavLink to={'admin'}>Users</NavLink>}
            </div>
            <div className={css.Buttons}>
                {users.length === 0 ?
                    <button className={css.PanelButton} onClick={switchToAdminPanel}>Admin panel</button> :
                    <button className={css.PanelButton} onClick={switchToMainPanel}>Main panel</button>
                }
            </div>
        </div>
    );
};

export {Menu};