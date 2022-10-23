import {useSelector} from "react-redux";
import {useEffect, useState} from "react";


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
        </div>
    );
};

export {PlayerFullInformation};