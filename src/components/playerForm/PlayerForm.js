import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {playerActions} from "../../redux";

const PlayerForm = () => {
    const {reset, register, handleSubmit, setValue} = useForm();
    const {playerForUpdate} = useSelector(state => state.players);

    const dispatch = useDispatch();

    useEffect(() => {
        if (playerForUpdate) {
            setValue('firstName', playerForUpdate.firstName);
            setValue('lastName', playerForUpdate.lastName);
            setValue('age', playerForUpdate.age);
            setValue('startDate', playerForUpdate.startDate);
        }
    }, [playerForUpdate])

    const submit = async (data) => {
        if (playerForUpdate){
            await dispatch(playerActions.updatePlayerById({id: playerForUpdate.id, player: data}));
            reset();
        } else {
            await dispatch(playerActions.savePlayer({player: data}))
            reset()
        }

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type='text' placeholder={'firstName'} {...register('firstName')}/>
            <input type='text' placeholder={'lastName'} {...register('lastName')}/>
            <input type='text' placeholder={'age'} {...register('age')}/>
            <input type='date' placeholder={'startDate'} {...register('startDate')}/>
            <button>{playerForUpdate ? 'Update': 'Save'}</button>

        </form>
    );
};

export {PlayerForm};