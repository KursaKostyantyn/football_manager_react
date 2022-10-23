import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {PlayerShortInformation} from "../playerShortInformation";




const ListPlayersOfClub = () => {
    const {clubForRender} = useSelector(state => state.clubs);
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        if (clubForRender !== null) {
            setPlayers(clubForRender.players)
        }
    }, [clubForRender])

    return (
        <div>
            List of players in this club
            {players.length === 0 && <div>There are no players in this club</div>}
            {players.map(player => <PlayerShortInformation key={player.id}
                                                           player={player}
                                                           noButtons={true}
            />)}
        </div>
    );
};

export {ListPlayersOfClub};