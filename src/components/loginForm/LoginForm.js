import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {authActions} from "../../redux";

const LoginForm = () => {

    const dispatch = useDispatch();
    const {register,  handleSubmit,formState:{errors}} = useForm();
    const navigate = useNavigate();

    const submit = async (data) => {
        const {error} = await dispatch(authActions.loginUser({user: data}));

        if (!error) {
            navigate('/players')
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
                <button>Login</button>
            </form>
            <div>
                {errors.login && errors.login.type === "minLength" && <span>Login must be longer than 3 symbols</span>}
                {errors.login && errors.login.type === "required" && <span>Login can't be empty</span>}
                {errors.login && errors.login.type === "maxLength" && <span>Login must be shorter than 20 symbols</span>}
                {errors.password && errors.password.type === "minLength" && <span>Password must be longer than 5 symbols</span>}
                {errors.password && errors.password.type === "required" && <span>Password can't be empty</span>}
                {errors.password && errors.password.type === "maxLength" && <span>Password must be shorter than 20 symbols</span>}
            </div>
        </div>

    );
};

export {LoginForm};