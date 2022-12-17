import {PlayerForm, PlayerFullInformation, PlayerPhoto, Players} from "../../components";
import css from './PlayersPage.module.css'


const PlayersPage = () => {
    return (
        <div className={css.Wrap}>
            <div className={css.PlayersList}>
                <h4> Players list:</h4>
                <Players/>
            </div>
            <div className={css.InfoBlock}>
                <div className={css.PlayerFormWrap}>
                    <div className={css.NamePlayerForm}><h4>Player form</h4></div>
                    <div className={css.PlayerForm}><PlayerForm/></div>
                </div>
                <div>
                    <div className={css.FullInfo}>
                        <div>
                            <PlayerPhoto/>
                        </div>
                        <div>
                            <h4>Player details</h4>
                            <PlayerFullInformation/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export {PlayersPage};