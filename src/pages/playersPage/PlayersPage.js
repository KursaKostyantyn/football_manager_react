import {PlayerForm, PlayerFullInformation, Players} from "../../components";
import css from './PlayersPage.module.css'


const PlayersPage = () => {
    return (
        <div className={css.Wrap}>
            <div className={css.PlayersList}>
                Players list:
                <Players/>
            </div>
            <div className={css.InfoBlock}>
                <div className={css.PlayerFormWrap}>
                    <div className={css.NamePlayerForm}>Players Form </div>
                   <div className={css.PlayerForm}> <PlayerForm/> </div>
                </div>
                <div>
                    <div className={css.AboutPlayer}>
                        Full info about player
                    </div>
                    <div className={css.FullInfo}>
                        <div>
                            <img src={'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'} alt={'some logo'}/>
                        </div>
                       <div>
                           <PlayerFullInformation/>
                       </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export {PlayersPage};