import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from "./ClubPhoto.module.css";
import {clubActions} from "../../redux";


const ClubPhoto = () => {
    const {register, handleSubmit, reset} = useForm();

    const {clubForRender, clubPhoto} = useSelector(state => state.clubs);

    const [errorMsg, setErrorMsg] = useState(false);
    const [club, setClub] = useState(null);
    const [photo, setPhoto] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        setClub(clubForRender)
    }, [clubForRender])

    useEffect(() => {
        setPhoto(clubPhoto)
    }, [clubPhoto])

    useEffect(() => {
        if (club !== null) {
            getClubPhoto()
        }
    }, [club])


    const addClubPhoto = async (data) => {
        if (data.file.length !== 0) {
            setErrorMsg(false)
            const formData = new FormData();
            formData.append("photo", data.file[0]);
            formData.append("id", club.id)
            reset();
            dispatch(clubActions.saveClubPhoto(formData))
        } else {
            setErrorMsg(true)
        }
    }

    const getClubPhoto = () => {
        dispatch(clubActions.getClubPhoto(club.photo))
    }


    return (
        <div>
            <div className={css.PhotoSection}>
                <div className={css.PhotoSectionHeader}>
                    <h4>
                        Club logo
                    </h4>
                </div>
                <div className={css.ImageSection}>
                    {club && <img className={css.Image} src={photo} alt={'club logo'}/>}
                </div>
                <div>
                    <h4>Choose logo for club</h4>
                    <form className={css.Form} onSubmit={handleSubmit(addClubPhoto)}>
                        <input type='file' accept='image/jpeg, image/png' {...register('file')}/>
                        <button>Add photo</button>
                        {errorMsg && <span>Please, choose a club photo</span>}
                    </form>
                </div>
            </div>
        </div>
    );
};


export {ClubPhoto};