import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {PlayerShortInformation} from "../playerShortInformation";

const ListPlayersOfClub = ({transfer}) => {
    const {clubForTransferFrom, clubForRender} = useSelector(state => state.clubs);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        if (clubForTransferFrom !== null) {
            setPlayers(clubForTransferFrom.players)
        }

        if (clubForRender !== null) {
            setPlayers(clubForRender.players)
        }
    }, [clubForTransferFrom, clubForRender])

    return (
        <div>
            {players.length === 0 && <div>There are no players in this club</div>}
            {players.map(player => <PlayerShortInformation key={player.id}
                                                           player={player}
                                                           noButtons={true}
                                                           transfer={transfer}
            />)}
        </div>
    );
};

export {ListPlayersOfClub};