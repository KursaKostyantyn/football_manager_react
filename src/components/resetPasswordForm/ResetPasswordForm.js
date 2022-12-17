import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";

import {authActions} from "../../redux";

const ResetPasswordForm = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    sessionStorage.removeItem("userLogin")

    const submit = async (data) => {
        const {error} = await dispatch(authActions.resetPassword(data));
        if (!error) {
            navigate('/checkYourEmail')
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <input type='text' placeholder={'login'} {...register('userLogin', {
                        required: true,
                        minLength: 3,
                        maxLength: 20
                    })}/>
                    <button>Reset Password</button>
                </form>

                <div>
                    {errors.login ? <span>The login you entered is incorrect.</span> : null}
                </div>
            </div>
        </div>
    );
};

export {ResetPasswordForm};