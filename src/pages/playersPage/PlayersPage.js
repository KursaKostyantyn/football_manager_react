import {PlayerForm, PlayerFullInformation, Players} from "../../components";
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
                        <div className={css.PhotoSection}>
                            <div className={css.PhotoSectionHeader}>
                                <h4>
                                    Player's photo
                                </h4>
                            </div>
                            <div>
                                <img src={'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'}
                                     alt={'some logo'}/>
                            </div>

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