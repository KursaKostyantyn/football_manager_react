import css from './transferPage.module.css'
import {Clubs, ListPlayersOfClub, TransferForm} from "../../components";

const TransferPage = () => {
    return (
        <div className={css.Wrap}>
            <div className={css.TransferForm}>
                <TransferForm/>
            </div>
            <div className={css.ClubsAndPlayers}>
                <div className={css.List}>
                    <h4>Clubs for transfer:</h4>
                    <Clubs transfer={true}/>
                </div>
                <div className={css.List}>
                    <h4>Players for transfer:</h4>
                    <ListPlayersOfClub transfer={true}/>
                </div>
            </div>


        </div>
    );
};

export {TransferPage};