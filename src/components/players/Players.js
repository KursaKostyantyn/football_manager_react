import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {PlayerShortInformation} from "../playerShortInformation";
import {playerActions} from "../../redux";


const Players = ({adding}) => {

    const {players} = useSelector(state => state.players);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(playerActions.getAllPlayers());
    }, [dispatch])

    return (
        <div>
            {players.map((player) => <PlayerShortInformation key={player.id}
                                                             player={player}
                                                             adding={adding}/>)}
        </div>
    );
};

export {Players};