import {useDispatch, useSelector} from "react-redux";

import {clubActions, playerActions} from "../../redux";
import {useEffect, useState} from "react";

const ClubShortInformation = ({club, transfer, noButtons, deleteFromTransfer}) => {

    const {clubForTransferFrom, clubForTransferTo} = useSelector(state => state.clubs);
    const [addedFrom, setAddedFrom] = useState(false);
    const [addedTo, setAddedTo] = useState(false);

    useEffect(() => {
        if (club === clubForTransferTo) {
            setAddedTo(false)
            setAddedFrom(true)
        } else {
            setAddedFrom(false)
        }
        if (club === clubForTransferFrom) {
            setAddedFrom(false)
            setAddedTo(true)
        } else {
            setAddedTo(false)
        }
    }, [clubForTransferFrom, clubForTransferTo, club])

    const dispatch = useDispatch();


    const {id, name, city} = club

    const clubDetails = async () => {
        await dispatch(clubActions.setClubForRender(club))
        await dispatch(playerActions.getAllPlayers())
    }

    const updateClub = () => {
        dispatch(clubActions.setClubForUpdate(club))
    }

    const deleteClub = () => {
        dispatch(clubActions.deleteClubById({id}))
    }

    const transferClubFrom = () => {
        dispatch(clubActions.setClubForTransferFrom(club))
    }


    const transferClubTo = () => {
        dispatch(clubActions.setClubForTransferTo(club))
    }

    const deleteFromTransferButton = () => {
        if (club === clubForTransferFrom) {
            dispatch(clubActions.setClubForTransferFrom(null))
        }
        if (club === clubForTransferTo) {
            dispatch(clubActions.setClubForTransferTo(null))
        }
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>city: {city}</div>

            {!transfer && !noButtons && <button onClick={clubDetails}> Details</button>}

            {!transfer && !noButtons && <button onClick={updateClub}>Update</button>}

            {!transfer && !noButtons && <button onClick={deleteClub}> Delete</button>}

            {transfer && !addedFrom && <button onClick={transferClubFrom}>transfer from</button>}

            {transfer && !addedTo && <button onClick={transferClubTo}>transfer to</button>}
            {deleteFromTransfer && <button onClick={deleteFromTransferButton}>delete from transfer</button>}
            <hr/>
        </div>


    );
};

export {ClubShortInformation};