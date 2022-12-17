import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import {ClubShortInformation, PlayerShortInformation} from "../index";
import css from './UserFullInfomation.module.css';


const UserFullInformation = () => {

    const [user, setUser] = useState(null);
    const {userForRender} = useSelector(state => state.users);
    const [clubs, setClubs] = useState(null);
    const [players, setPlayers] = useState(null)

    useEffect(() => {

        setUser(userForRender)
        if (userForRender !== null && userForRender.clubs.length !== 0) {
            setClubs(userForRender.clubs);
        } else {
            setClubs(null)
        }
        if (userForRender !== null && userForRender.players.length !== 0) {
            setPlayers(userForRender.players)
        } else {
            setPlayers(null)
        }
    }, [userForRender])


    return (
        <div className={css.Wrap}>
            {user && <div>login: {user.login}</div>}
            {user && <div>email: {user.email}</div>}
            {user && <div>Role: {user.role.split('_')[1]}</div>}
            {user && <div>activated: {user.activated.toString()}</div>}
            {user && <div>blocked: {user.blocked.toString()}</div>}
            <div className={css.ClubsAndPLayersWrap}>
                <div><b>Clubs</b>
                    {clubs ?
                        <div>
                            {clubs.map(club => <ClubShortInformation key={club.id}
                                                                     club={club}
                                                                     noButtons={true}/>)}
                        </div> :
                        <div>The user has not created any club</div>}
                </div>

                <div className={css.Players}><b>PLayers</b>
                    {players ? <div>
                            {players.map(player => <PlayerShortInformation key={player.id}
                                                                           player={player}
                                                                           noButtons={true}/>)}
                        </div> :
                        <div>The user has not created any player</div>}

                </div>
            </div>
        </div>
    );
};

export {UserFullInformation};