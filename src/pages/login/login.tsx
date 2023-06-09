import React, {useState} from 'react';
import {Button} from "../../components";
import {Link} from "react-router-dom";
import "../signup/signup.css"
// @ts-ignore
import authImage from "../../assets/sign_.jpg"
import {useDispatch} from "react-redux";
import {LoginUser} from "../../action/auth-login-action";
import {ChangeTitle, ScrollTop} from "../../middleware";
import {Dispatch} from "redux";
import {FormEventType} from "../../types/event.types";

function Login() {

    ScrollTop()
    ChangeTitle("Login")

    const [form, setForm] = useState({
        phoneNumber: '',
        password: '',
    });

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<any>) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const dispatch: Dispatch<any> = useDispatch()

    const handleSubmit = async (e: FormEventType) => {
        e.preventDefault();
        try {
            setIsLoading(true)
            await dispatch(LoginUser(form.phoneNumber, form.password));
            setIsLoading(false); // set isLoading back to false after dispatch is complete
        } catch (error) {
            setIsLoading(false); // set isLoading back to false in case of error
            console.error(error);
        }
    }

    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>Log In</p>
                    <form onSubmit={handleSubmit}>
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                id={"phoneNumber"}
                                name="phoneNumber"
                                type="tel"
                                placeholder="Phone Number"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="password">Password</label>
                            <input
                                id={"password"}
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="auth__form-container_fields-content_button">
                            <Button background={"primary"} loading={isLoading && true} hover={"primary"}
                                    textWeight={"w_600"}>Log In</Button>
                        </div>
                    </form>
                    <div className="auth__form-container_fields-account">
                        <p> Didn't have an account?
                            <Link to={"/seller/signup"}>
                                <span>Sign Up</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="auth__form-container_image">
                <img src={authImage} alt="sign in"/>
            </div>
        </div>
    )
}

// @ts-ignore
export default Login