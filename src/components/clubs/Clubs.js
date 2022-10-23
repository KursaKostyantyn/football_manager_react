import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {clubActions} from "../../redux";
import {ClubShortInformation} from "../clubShortInformation";

const Clubs = () => {
    const {clubs} = useSelector(state => state.clubs);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clubActions.getAllClubs())
    }, [dispatch])

    return (
        <div>
            {clubs.map(club => <ClubShortInformation key={club.id} club={club}/>)}
        </div>
    );
};

export {Clubs};