import css from "./UsersPage.module.css";
import {UserForm, UserFullInformation, UserPhoto, Users} from "../../components";

const UsersPage = () => {
    return (
        <div className={css.Wrap}>
            <div className={css.UsersList}>
                <h4> Users list:</h4>
                <Users/>
            </div>
            <div className={css.InfoBlock}>
                <div className={css.UserFormWrap}>
                    <div className={css.NameUserForm}><h4>User form</h4></div>
                    <div className={css.UserForm}><UserForm/></div>
                </div>
                <div>
                    <div className={css.FullInfo}>
                        <div>
                            <UserPhoto/>
                        </div>
                        <div>
                            <h4>User details</h4>
                            <UserFullInformation/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export {UsersPage};