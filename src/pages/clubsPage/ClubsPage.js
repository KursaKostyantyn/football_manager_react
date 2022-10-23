import css from './ClubsPage.module.css'
import {ClubForm, ClubFullInformation, Clubs, ListPlayersOfClub} from "../../components";


const ClubsPage = () => {
    return (
        <div className={css.Wrap}>
            <div className={css.clubsList}>
                Clubs list:
                <Clubs/>
            </div>
            <div className={css.InfoBlock}>
                <div className={css.clubFormWrap}>
                    <div className={css.NameclubForm}>clubs Form</div>
                    <div className={css.clubForm}>
                        <ClubForm/>
                    </div>
                </div>
                <div>
                    <div className={css.Aboutclub}>
                        Full info about club
                    </div>
                    <div className={css.FullInfo}>
                        <div>
                            <img width={100}
                                 src={'https://st4.depositphotos.com/5532432/21655/v/1600/depositphotos_216554672-stock-illustration-football-club-logo-badge-represent.jpg'}
                                 alt={'some logo'}/>
                        </div>
                        <div>
                            <ClubFullInformation/>
                        </div>
                        <div><ListPlayersOfClub/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export {ClubsPage};