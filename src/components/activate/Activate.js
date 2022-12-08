import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

import {authActions} from "../../redux";

const Activate = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    const id = searchParams.get("id");
    useEffect(() => {
            dispatch(authActions.activateUser({id}))
        }
    )


    return (
        <div>
            User is activate
        </div>
    );
};

export {Activate};