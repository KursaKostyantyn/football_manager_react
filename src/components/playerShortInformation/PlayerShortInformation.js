import {useDispatch, useSelector} from "react-redux";

import {clubActions, playerActions} from "../../redux";

const PlayerShortInformation = ({player, adding, noButtons, clubId, transfer, deleteFromTransfer}) => {

    const {playerForTransfer} = useSelector(state => state.players);
    const dispatch = useDispatch();

    const {
        id,
        firstName,
        lastName,
    } = player


    const playerDetails = () => {
        dispatch(playerActions.setPlayerForRender(player));
    }

    const updatePlayer = () => {
        dispatch(playerActions.setPlayerForUpdate(player))
    }

    const deletePlayer = () => {
        dispatch(playerActions.deletePlayerById({id}))
    }

    const addPlayer = async () => {
        await dispatch(clubActions.addPlayerToClubById(
            {
                id: clubId,
                playerId: id
            }
        ))
        await dispatch(playerActions.getAllPlayers())
    }

    const transferPlayer = () => {
        dispatch(playerActions.setPlayerForTransfer(player))
    }

    const deleteFromTransferButton = () => {
        if (player === playerForTransfer) {
            dispatch(playerActions.setPlayerForTransfer(null))
        }
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>firstName: {firstName}</div>
            <div>lastName: {lastName}</div>

            {!adding && !noButtons && <button onClick={playerDetails}> details </button>}

            {!adding && !noButtons && <button onClick={updatePlayer}> update </button>}

            {!adding && !noButtons && <button onClick={deletePlayer}> delete </button>}

            {adding && !noButtons && <button onClick={addPlayer}>Add player</button>}

            {transfer && <button onClick={transferPlayer}>choose player for transfer</button>}

            {deleteFromTransfer && <button onClick={deleteFromTransferButton}>delete from transfer</button>}
            <hr/>

        </div>
    );
};

export {PlayerShortInformation};