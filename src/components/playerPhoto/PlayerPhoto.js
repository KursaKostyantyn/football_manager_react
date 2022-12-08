import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import css from "./PlayerPhoto.module.css";
import {playerActions} from "../../redux";

const PlayerPhoto = () => {
    const {register, handleSubmit, reset} = useForm();

    const {playerForRender, playerPhoto} = useSelector(state => state.players);

    const [player, setPlayer] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [errorMsg, setErrorMsg] = useState(false);

    const dispatch = useDispatch();


    useEffect(() => {
        setPlayer(playerForRender)
    }, [playerForRender])

    useEffect(() => {
        setPhoto(playerPhoto)
    }, [playerPhoto])

    useEffect(() => {
        if (player !== null) {
            getPlayerPhoto()
        }
    }, [player])

    const addPhoto = async (data) => {
        if (data.file.length !== 0) {
            setErrorMsg(false)
            const formData = new FormData()
            formData.append("photo", data.file[0]);
            formData.append("id", player.id);
            reset()
            dispatch(playerActions.savePlayerPhoto(formData))
        } else {
            setErrorMsg(true)
        }

    }

    const getPlayerPhoto = () => {
        dispatch(playerActions.getPlayerPhoto(player.photo))
    }

    return (
        <div>
            <div className={css.PhotoSection}>
                <div className={css.PhotoSectionHeader}>
                    <h4>
                        Player's photo
                    </h4>
                </div>
                <div className={css.ImageSection}>
                    {player && <img className={css.Image} src={photo} alt={'player photo'}/>}
                </div>
                <div>
                    <h4>Choose a player photo</h4>
                    <form className={css.Form} onSubmit={handleSubmit(addPhoto)}>
                        <input type="file" accept='image/jpeg, image/png' {...register("file")}/>
                        <button>Add Photo</button>
                        {errorMsg && <span>Please, choose a player photo</span>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export {PlayerPhoto};