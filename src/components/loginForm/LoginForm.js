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
                    minLength: 4,
                    maxLength: 20
                })}/>
                <button>Login</button>
            </form>
            <div>
                {errors.login || errors.password ? <span>The login or password you entered is incorrect.</span> : null}
            </div>
        </div>

    );
};

export {LoginForm};