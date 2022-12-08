import css from './ClubsPage.module.css'
import {ClubForm, ClubFullInformation, ClubPhoto, Clubs, ListPlayersOfClub} from "../../components";

const ClubsPage = () => {
    return (
        <div className={css.Wrap}>
            <div className={css.ClubsList}>
                <h4> Clubs list:</h4>
                <Clubs/>
            </div>
            <div className={css.InfoBlock}>
                <div className={css.ClubFormWrap}>
                    <div className={css.NameClubForm}><h4>Club Form</h4></div>
                    <div className={css.ClubForm}>
                        <ClubForm/>
                    </div>
                </div>
                <div>
                    <div className={css.FullInfo}>
                        <div><ClubPhoto/></div>
                        <div className={css.ClubDetails}>
                            <h4>Club details</h4>
                            <ClubFullInformation/>
                        </div>
                        <div className={css.PlayerList}>
                            <h4>List of players</h4>
                            <ListPlayersOfClub/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export {ClubsPage};