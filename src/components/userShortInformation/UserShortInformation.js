import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

const UserShortInformation = ({user}) => {

    const dispatch = useDispatch();

    const {id, login, email} = user
    const userDetails = async () => {
        await dispatch(userActions.setUserForRender(user));
    }

    const updateUser = async () => {
        await dispatch(userActions.setUserForUpdate(user))
    }

    const deleteUser = async () => {
        await dispatch(userActions.deleteUserById(id))
    }


    return (
        <div>
            <div>Login: {login}</div>
            <div>email: {email}</div>

            <button onClick={userDetails}> details</button>

            <button onClick={updateUser}> update</button>

            <button onClick={deleteUser}> delete</button>

            <hr/>
        </div>
    );
};

export {UserShortInformation};