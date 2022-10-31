import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import css from './transferForm.module.css'
import {ClubShortInformation} from "../clubShortInformation";
import {PlayerShortInformation} from "../playerShortInformation";
import {clubActions, playerActions} from "../../redux";

const TransferForm = () => {

    const {playerForTransfer} = useSelector(state => state.players);
    const {clubForTransferFrom, clubForTransferTo} = useSelector(state => state.clubs);
    const [player, setPlayer] = useState(null);
    const [clubFrom, setClubFrom] = useState(null);
    const [clubTo, setClubTo] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        setPlayer(playerForTransfer);
        setClubFrom(clubForTransferFrom);
        setClubTo(clubForTransferTo);

    }, [playerForTransfer, clubForTransferFrom, clubForTransferTo])

    const transfer = async () => {
        await dispatch(clubActions.playerTransfer({
            playerId: player.id,
            donorClubId: clubFrom.id,
            recipientClubId: clubTo.id
        }))
        await dispatch(clubActions.setClubForTransferFrom(null))
        await dispatch(clubActions.setClubForTransferTo(null))
        await dispatch(playerActions.setPlayerForTransfer(null))
        await dispatch(clubActions.getAllClubs)
    }

    return (
        <div className={css.Wrap}>
            {clubFrom && <div className={css.Items}>Club donor <ClubShortInformation key={clubFrom.id}
                                                                                     club={clubFrom}
                                                                                     noButtons={true}
                                                                                     deleteFromTransfer={true}/>
            </div>}

            {player &&
                <div className={css.Items}>Player for transfer <PlayerShortInformation key={player.id}
                                                                                       player={player}
                                                                                       noButtons={true}
                                                                                       deleteFromTransfer={true}
                />
                </div>}

            {clubTo && <div className={css.Items}>Club recipient<ClubShortInformation key={clubTo.id}
                                                                                      club={clubTo}
                                                                                      noButtons={true}
                                                                                      deleteFromTransfer={true}/>
            </div>}

            {clubFrom && clubTo && playerForTransfer && <button onClick={transfer}>Transfer</button>}
        </div>
    );
};

export {TransferForm};