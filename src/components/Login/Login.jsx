import React from "react"
import s from './../common/FormsControls/FormsControls.module.css'
import { Field } from "redux-form"
import { reduxForm } from "redux-form"
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"email"} name={'email'} component={'input'} />
            </div>
            <div>
                <Field placeholder={"password"} name={'password'} component={'input'} type={"password"} />
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} type={"checkbox"} />remember me
            </div>
            {error && <div className={s.form__error}>{error}</div>}
            <div>
                <button>log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = ({ login, isAuth }) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
        return <Navigate to={'/profile'} />
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
