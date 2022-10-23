import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {FreePlayers} from "../freePlayers";
import {playerActions} from "../../redux";

const ClubFullInformation = () => {
    const [club, setClub] = useState(null);
    const [adding, setAdding] = useState(false);
    const {clubForRender} = useSelector(state => state.clubs);
    const {players} = useSelector(state => state.players);
    const dispatch = useDispatch();

    useEffect(() => {
        setClub(clubForRender);
    }, [clubForRender])


    const submit = () => {
        if (!adding && players.length === 0) {
            console.log(adding)
            dispatch(playerActions.getAllPlayers())
        }
        setAdding(!adding)
    }

    return (
        <div>
            {club && <div>id: {club.id}</div>}
            {club && <div>name: {club.name}</div>}
            {club && <div>account: {club.account}</div>}
            {club && <div>city: {club.city}</div>}
            {club && <div>country: {club.country}</div>}
            {club && <div>commission: {club.commission}</div>}
            <button onClick={submit}>{adding ? 'Hide player for adding' : 'Show player for adding'}</button>
            {adding && <FreePlayers clubId={club.id}/>}
        </div>
    );
};

export {ClubFullInformation};