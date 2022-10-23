import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {PlayerShortInformation} from "../playerShortInformation";


const FreePlayers = ({clubId}) => {

    const {players} = useSelector(state => state.players);
    const [freePlayers, setFreePlayers] = useState([]);

    useEffect(() => {
        const filter = players.filter(player => player.club.id === 0);
        setFreePlayers(filter)
    }, [players])

    return (

        <div>
            {freePlayers.map(player => <PlayerShortInformation key={player.id}
                                                               player={player}
                                                               adding={true}
                                                               clubId={clubId}
            />)}
        </div>
    );
};

export {FreePlayers};