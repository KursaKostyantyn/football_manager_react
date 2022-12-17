import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import css from "./UserForm.module.css";
import {userActions} from "../../redux";

const UserForm = () => {
    const {register, reset, setValue, handleSubmit, formState: {errors}} = useForm();
    const {userForUpdate, usersErrors} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        if (userForUpdate) {
            setValue('login', userForUpdate.login)
            setValue('email', userForUpdate.email)
            setValue('activated', userForUpdate.activated)
            setValue('blocked', userForUpdate.blocked)
            setValue('role', userForUpdate.role)
        }
    })

    const submit = async (data) => {
        if (userForUpdate) {
            await dispatch(userActions.updateUser({user: data, id: userForUpdate.id}))
            reset();
        } else {
            await dispatch(userActions.saveUser({user: data}))
            reset();
        }
    };

    const resetForm = async () => {
        await dispatch(userActions.setUserForUpdate(null))
        reset();
    };


    return (
        <div className={css.Wrap}>
            <div className={css.Form}>
                <form>
                    <div>
                        <input type='text' placeholder={'login'} {...register('login', {
                            required: true,
                            minLength: 3,
                            maxLength: 20
                        })}/>
                    </div>

                    {userForUpdate ?
                        <div>
                            <input type='text' placeholder={'password'} {...register('password')}/>
                        </div> :
                        <div>
                            <input type='text' placeholder={'password'} {...register('password', {
                                required: true,
                                minLength: 4,
                                maxLength: 20
                            })}/>
                            {errors.password && <span> password can't be empty</span>}
                        </div>}


                    <div>
                        <input type='text' placeholder={'email'} {...register('email', {
                            required: true
                        })}/>
                    </div>

                    <div>
                        <select name={'role'} {...register('role')}>
                            <option value='ROLE_ADMIN'>ADMIN</option>
                            <option value='ROLE_USER'>USER</option>
                            <option value='ROLE_SUPERADMIN'>SUPERADMIN</option>
                        </select>
                    </div>

                    <div>
                        <input type='checkbox' name='activated' {...register('activated')}/>
                        <label htmlFor={'activated'}>activated</label>
                    </div>

                    <div>
                        <input type='checkbox' name='blocked' {...register('blocked')}/>
                        <label htmlFor={'blocked'}>blocked</label>
                    </div>

                    <div>
                        <button
                            onClick={handleSubmit(submit)}>{userForUpdate ? 'Update player' : 'Save player'}</button>
                        <button onClick={handleSubmit(resetForm)}>Reset form</button>
                    </div>
                    <div>
                        {usersErrors && <span>{usersErrors}</span>}
                    </div>

                </form>
            </div>

        </div>

    );
};

export {UserForm};
