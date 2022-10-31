import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {authActions} from "../../redux";

const RegisterForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submit = async (data) => {
        const {error} = await dispatch(authActions.registerUser({user: data}));
        if (!error) {
            navigate('/login')
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' placeholder={'login'} {...register('login', {
                    required: true,
                    minLength: 3,
                    maxLength: 20
                })}/>
                <input type='password' placeholder={'password'} {...register('password', {
                    required: true,
                    minLength: 5,
                    maxLength: 20
                })}/>
                <input type='email' placeholder={'email'} {...register('email')}/>
                <button>Register</button>
            </form>
            <div>
                {errors.login && errors.login.type === "minLength" && <span>Login must be longer than 3 symbols</span>}
                {errors.login && errors.login.type === "required" && <span>Login can't be empty</span>}
                {errors.login && errors.login.type === "maxLength" &&
                    <span>Login must be shorter than 20 symbols</span>}
                {errors.password && errors.password.type === "minLength" &&
                    <span>Password must be longer than 5 symbols</span>}
                {errors.password && errors.password.type === "required" && <span>Password can't be empty</span>}
                {errors.password && errors.password.type === "maxLength" &&
                    <span>Password must be shorter than 20 symbols</span>}
                {errors.email && <span>Incorrect email</span>}
            </div>
        </div>


    );
};

export {RegisterForm};