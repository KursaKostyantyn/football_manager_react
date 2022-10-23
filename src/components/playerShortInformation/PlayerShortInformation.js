import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import css from './PlayerShortInformation.module.css'
import {clubActions, playerActions} from "../../redux";


const PlayerShortInformation = ({player, adding, noButtons, clubId}) => {
    const {clubForRender} = useSelector(state => state.clubs);
    const {
        id,
        firstName,
        lastName,
    } = player

    // const [clubId, setClubId] = useState(null);

    useEffect(() => {
        if (clubForRender !== null) {
            // setClubId(clubForRender.id)
        }
    }, [clubForRender])

    const dispatch = useDispatch();


    return (
        <div className={css.Player}>
            <div>{id} {firstName} {lastName}</div>

            {!adding && !noButtons && <button onClick={() => {
                dispatch(playerActions.setPlayerForRender(player));
            }}>
                details
            </button>}

            {!adding && !noButtons && <button onClick={() => {
                dispatch(playerActions.setPlayerForUpdate(player))
            }}>
                update
            </button>}

            {!adding && !noButtons && <button onClick={() => {
                dispatch(playerActions.deletePlayerById({id}))
            }}>
                delete
            </button>}

            {adding && !noButtons && <button onClick={async () => {
                console.log('clubId', clubId)
                await dispatch(clubActions.addPlayerToClubById(
                    {
                        id: clubId,
                        playerId: id
                    }
                ))
                await dispatch(playerActions.getAllPlayers())
            }
            }>Add player</button>}
        </div>
    );
};

export {PlayerShortInformation};