import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {ClubShortInformation} from "../clubShortInformation";

const PlayerFullInformation = () => {

    const [player, setPlayer] = useState(null);
    const {playerForRender} = useSelector(state => state.players)

    useEffect(() => {
        setPlayer(playerForRender)
    }, [playerForRender])


    return (
        <div>
            {player && <div>id: {player.id}</div>}
            {player && <div>firstName: {player.firstName}</div>}
            {player && <div>lastName: {player.lastName}</div>}
            {player && <div>age: {player.age}</div>}
            {player && <div>startDate: {player.startDate}</div>}
            {player && player.club.id === 0 && <div>Club: Free agent </div>}
            {player && player.club.id !== 0 &&
                <div>Club: <ClubShortInformation key={player.id} club={player.club} noButtons={true}/></div>}

        </div>
    );
};

export {PlayerFullInformation};