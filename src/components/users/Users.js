import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userActions} from "../../redux";
import {UserShortInformation} from "../userShortInformation";

const Users = () => {
    const {users} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAllUsers());
    }, [dispatch])

    return (
        <div>
            {users.map((user, index) => <UserShortInformation key={index}
                                                              user={user}/>)}
        </div>
    );
};

export {Users};