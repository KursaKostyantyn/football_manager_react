import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Player} from "../Player";
import {playerActions} from "../../redux";


const Players = () => {

    const {players} = useSelector(state => state.players);
    console.log('players in players',players)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(playerActions.getAllPlayers);
        console.log("hi")
        console.log('players in useeffect', players)
    }, [])

    return (
        <div>

            {players.map(player => <Player key={player.id} player={player}/>)}
        </div>
    );
};

export {Players};