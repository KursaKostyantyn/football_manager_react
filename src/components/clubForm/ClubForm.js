import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {clubActions} from "../../redux";

const ClubForm = () => {
    const {reset, register, handleSubmit, setValue} = useForm();
    const {clubForUpdate} = useSelector(state => state.clubs);

    const dispatch = useDispatch();

    useEffect(() => {
        if (clubForUpdate) {
            setValue('name', clubForUpdate.name);
            setValue('account', clubForUpdate.account);
            setValue('city', clubForUpdate.city);
            setValue('country', clubForUpdate.country);
            setValue('commission', clubForUpdate.commission)
        }
    }, [clubForUpdate])

    const submit = async (data) => {
        if (clubForUpdate) {
            await dispatch(clubActions.updateClubById({id: clubForUpdate.id, club: data}));
            reset();
        } else {
            await dispatch(clubActions.saveClub({club: data}));
            reset();
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' placeholder={'name'} {...register('name')}/>
                <input type='number' placeholder={'account'} {...register('account')}/>
                <input type='text' placeholder={'city'} {...register('city')}/>
                <input type='text' placeholder={'country'} {...register('country')}/>
                <input type='number' placeholder={'commission'} {...register('commission')}/>
                <button>{clubForUpdate ? 'Update' : 'Save'}</button>

            </form>
        </div>
    );
};

export {ClubForm};