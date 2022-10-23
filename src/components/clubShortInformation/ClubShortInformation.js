import {useDispatch} from "react-redux";

import {clubActions} from "../../redux";
import css from './Club.module.css'

const ClubShortInformation = ({club}) => {
    const {id, name} = club

    const dispatch = useDispatch();

    return (
        <div className={css.Club}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={() => {
                dispatch(clubActions.setClubForRender(club))
            }}>
                Details
            </button>

            <button onClick={()=>{
             dispatch(clubActions.setClubForUpdate(club))
            }}>Update</button>

            <button onClick={() => {
                dispatch(clubActions.deleteClubById({id}))
            }}>
                Delete
            </button>

        </div>
    );
};

export {ClubShortInformation};