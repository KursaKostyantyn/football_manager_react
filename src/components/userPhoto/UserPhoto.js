import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {userActions} from "../../redux";
import css from './UserPhoto.module.css'

const UserPhoto = () => {
    const {register, handleSubmit, reset} = useForm();

    const {userForRender, userPhoto} = useSelector(state => state.users);

    const [user, setUser] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [errorMsg, setErrorMsg] = useState(false);

    const dispatch = useDispatch();


    useEffect(() => {
        setUser(userForRender)
    }, [userForRender])

    useEffect(() => {
        setPhoto(userPhoto)
    }, [userPhoto])

    useEffect(() => {
        if (user !== null) {
            getUserPhoto()
        }
    }, [user])

    const addPhoto = async (data) => {
        if (data.file.length !== 0) {
            setErrorMsg(false)
            const formData = new FormData()
            formData.append("photo", data.file[0]);
            formData.append("id", user.id);
            await dispatch(userActions.saveUserPhoto(formData))
            reset()
        } else {
            setErrorMsg(true)
        }

    }

    const getUserPhoto = async () => {
        await dispatch(userActions.getUserPhoto(user.photo))
    }

    return (
        <div>
            <div className={css.PhotoSection}>
                <div className={css.PhotoSectionHeader}>
                    <h4>
                        User's photo
                    </h4>
                </div>
                <div className={css.ImageSection}>
                    {user && <img className={css.Image} src={photo} alt={'user photo'}/>}
                </div>
                <div>
                    <h4>Choose a user photo</h4>
                    <form className={css.Form} onSubmit={handleSubmit(addPhoto)}>
                        <input type="file" accept='image/jpeg, image/png' {...register("file")}/>
                        <button>Add Photo</button>
                        {errorMsg && <span>Please, choose a user photo</span>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export {UserPhoto};