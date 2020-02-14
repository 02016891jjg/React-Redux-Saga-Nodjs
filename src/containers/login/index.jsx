import React, { Component } from 'react'
import {ReactTitle} from 'react-meta-tags';
import Header from 'components/header'
import { LOGO_IMG } from 'common/images'
import ButtonGroupLogin from 'components/common/ButtonGroupLogin'
import ButtonComponent from 'components/common/buttonComponent/ButtonComponent'
import * as EmailValidator from 'email-validator'
import { BACKEND_URL } from 'common/constants'
import { connect } from 'react-redux'
import {
    SAVE_USER_DETAIL,
    GET_USER_DETAIL,
} from "common/action.js";
import './login.scss'
import {
    login_box,
    form_group,
    input_password,
    eye_icon,
    forget_label,
    login_button,
    button_group,
    email_password,
    input_email,
    login,
    border_line,
    error_border,
    forget_button,
    forget,
    forget_box,
    email_active_border,
    password_active_border,
    error_msg,
    main_wrapper
} from './login.module.scss'
import $ from "jquery";
import { border_or, border_outer, continue_with, or } from "../signup/signup.module.scss";
// import {error_msg} from "../signup/signup.module.scss";

// import {border_line} from "../signup/signup.module.scss";

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            error_msg: "",
            forget_dialog_show: false,
            forget_password_error: "",
            forgetemail: "",
            email_active: false,
            password_active: false,
            password_error_msg: "",
            email_error_msg: "",
            forget_email_error_msg: "",
            error_result: ""

        }
        this.updateEmail = this.updateEmail.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.emptyCheck = this.emptyCheck.bind(this)
        this.passwordErrorUpdate = this.passwordErrorUpdate.bind(this)
    }

    showPassword = () => {
        // this.setState({emailBox: !this.state.emailBox})
        $('#show_icon').addClass("hide");
        $('#hide_icon').removeClass("hide");
        $('#hide_icon').removeClass("hide");
        $('input[name=password]').attr('type', 'text');
    }
    hidePassword = () => {
        $('#show_icon').removeClass("hide");
        $('#hide_icon').addClass("hide");
        $('input[name=password]').attr('type', 'password');

    }
    updateEmail = e => {
        // console.log("update");
        this.setState({ email: e.target.value })
        this.setState({ email_error_msg: "" })
        this.setState({ email: e.target.value })
        // console.log(this.state.email);
        if (EmailValidator.validate(this.state.email)) {
            this.setState({ email_active: true })
        } else {
            this.setState({ email_active: false })
        }
    }

    updateForgetEmail = e => {
        this.setState({ forgetemail: e.target.value })
        if (EmailValidator.validate(this.state.forgetemail)) {
            this.setState({ forget_email_active: true })
        } else {
            this.setState({ forget_email_active: false })
        }
    }

    updatePassword = e => {
        this.setState({ password: e.target.value })
        this.setState({ password_error_msg: "" })
        if (this.state.password == "") {
            this.setState({ password_active: false })
        } else {
            this.setState({ password_active: true })
        }
    }
    emptyCheck = (e) => {
        console.log(e.target.type);

        console.log(this.state.email)
        if (e.target.type == "email") {
            this.setState({ email: e.target.value })
        } else {
            this.setState({ password: e.target.value })
        }
        if (e.target.type == "email" && !EmailValidator.validate(this.state.email)) {
            this.setState({ email_active: false })
        }
        if (e.target.type == "email" && EmailValidator.validate(this.state.email)) {

            this.setState({ email_active: true })
        }
        if (e.target.value == "" && e.target.type == "email") {
            this.setState({ email_active: false })
        }

        if (e.target.value == "" && e.target.type == "password") {
            this.setState({ password_active: false })
        }

    }
    emptyForgetEmailCheck = (e) => {
        if (e.target.value == "") {
            this.setState({ forget_email_active: false })
        } else if (!EmailValidator.validate(e.target.value)) {
            this.setState({ forget_email_active: false })
        } else {
            this.setState({ forget_email_active: true })
        }

    }
    emailErrorUpdate = () => {
        this.setState({ email_error_msg: "" })
    }
    forgetEmailErrorUpdate = () => {
        this.setState({ forget_email_error_msg: "" })
    }
    passwordErrorUpdate = () => {
        this.setState({ password_error_msg: "" })
    }

    handleSubmit(event) {

        console.log(this.state.email);
        console.log(this.state.password)
        this.setState({ submitted: true, error_msg: "" })
        const { user } = this.state
        console.log("test")
        if (!this.state.email) {
            this.setState({ email_error_msg: "Please enter your email" })
        } else if (!this.state.email_active) {
            this.setState({ email_error_msg: "The email you have entered is incorrect." })
        }
        if (!this.state.password) {
            this.setState({ password_error_msg: "Please enter your password" })
        }
        if (this.state.email && this.state.password) {
            // console.log(this.props.dispatch);
            this.login()
            // this.props.register(user);

        } else {
            // this.setState({error_msg: res.data.message, email_active: false, password_active: false})
        }
        event.stopPropagation()
    }

    forgethandleSubmit = (event) => {
        this.setState({ forget_password_error: "", error_result: "" })
        if (this.state.forgetemail == "") {
            this.setState({ forget_email_error_msg: "Enter your email" })
        } else if (!this.state.forget_email_active) {
            this.setState({ forget_email_error_msg: "Invalid email" });
        } else {
            if (this.state.forgetemail) {
                this.sendEmail()
            }
        }

        event.stopPropagation()
    }

    async sendEmail() {
        const axios = require('axios');
        const data = { email: this.state.forgetemail };
        let res = await axios.post(BACKEND_URL + '/sendEmail', data);
        console.log(res);
        // if(res.data.error){
        //     this.setState({forget_email_error_msg:res.data.message});
        // }
        this.setState({ error_result: res.data.message })
        return true;
    }

    showErrorMsg = (error_msg) => {
        this.setState({ error_msg: error_msg })
    }
    showForgetDialog = () => {
        this.setState({ forget_dialog_show: true })
    }

    async login() {

        const axios = require('axios');
        const data = { email: this.state.email, password: this.state.password, creation_type: "email" };
        let res = await
            axios.post(BACKEND_URL + '/user_login', data);
        console.log(res);
        if (typeof res.data.error !== "undefined" && res.data.error == false) {
            // this.props.dispatch({
            //     type: SAVE_USER_DETAIL,
            //     payload: {id: res.data.user.id, image: res.data.photo}
            // })
            this.setState({ password_active: false, email_active: false, email_error_msg: "", password_error_msg: "" })
            localStorage.setItem('user_id', res.data.user.user_id);
            localStorage.setItem('image', res.data.user.photo);
            console.log(res);
            window.location = './';
        } else {
            this.setState({ password_active: false, email_active: false, email_error_msg: "", password_error_msg: "" })
            this.setState({ error_msg: res.data.message })
        }


    }

    render() {

        return (

            !this.state.forget_dialog_show ?
                <div className="wrapper">
                    <ReactTitle title="Log In | TechSpecs"/>
                    <Header headerClass="login_header" onLoginButtonClass="login_class" onFeedBackClick={this.onFeedBackClick} />
                    <section className={main_wrapper}>
                        <div className={login_box}>
                            <img src={LOGO_IMG} alt="" />
                            <p>Login to your TechSpecs account to access our all features!</p>
                            <div className={form_group}>
                                <div className={email_password}>
                                    <label>Enter your email</label>
                                    <div className={input_email}>
                                        <input
                                            type="email"
                                            autoComplete="off"
                                            className={this.state.email_active ? ["form-control", email_active_border].join(" ") : this.state.email_error_msg == "" && this.state.error_msg == "" ? "form-control" : ["form-control", error_border].join(" ")}
                                            value={this.state.email}
                                            onChange={this.updateEmail}
                                            onFocus={this.emailErrorUpdate}
                                            onKeyUp={this.emptyCheck}
                                            name="email"
                                        />
                                        {this.state.email_error_msg != "" ?
                                            <p className={error_msg}>{this.state.email_error_msg}</p> :
                                            ""
                                        }
                                    </div>

                                    <label>Enter your password</label>
                                    <div className={input_password}>
                                        <input
                                            type="password"
                                            name="password"
                                            autoComplete="new-password"
                                            className={this.state.password_active ? ["form-control", password_active_border].join(" ") : this.state.password_error_msg == "" && this.state.error_msg == "" ? "form-control" : ["form-control", error_border].join(" ")}
                                            value={this.state.password}
                                            onChange={this.updatePassword}
                                            onKeyUp={this.emptyCheck}
                                            onFocus={this.passwordErrorUpdate}
                                        />
                                        <div className={eye_icon} id="show_icon" onClick={this.showPassword}>
                                            <i className="fa fa-eye"></i>
                                        </div>
                                        <div className={[eye_icon, "hide"].join(" ")} id="hide_icon"
                                            onClick={this.hidePassword}>
                                            <i className="fa fa-eye-slash"></i>
                                        </div>
                                        {this.state.password_error_msg != "" ?
                                            <p className={error_msg}>{this.state.password_error_msg}</p> :
                                            ""
                                        }
                                        {this.state.error_msg != "" ?
                                            <p className={error_msg}>{this.state.error_msg}</p> :
                                            ""
                                        }
                                        <label className={forget_label} onClick={this.showForgetDialog}>Forgot your
                                            password?</label>
                                        <div className={login_button}>
                                            <div
                                                className={login}
                                                children="Login to Your Account"
                                                onClick={this.handleSubmit}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={border_outer}>
                                    <div className={border_or}>
                                        <div className={border_line}></div>
                                        <span className={or}>OR</span>
                                        <div className={border_line}></div>
                                    </div>

                                    <span className={continue_with}>Continue with</span>
                                </div>
                                <div className={button_group}>
                                    <ButtonGroupLogin
                                        showErrorMsg={this.showErrorMsg}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div> :
                <div className="wrapper">
                    <ReactTitle title="Log In | TechSpecs"/>
                    <Header headerClass="login_header" onFeedBackClick={this.onFeedBackClick} />
                    <section className={main_wrapper}>
                        <div className={[forget_box, login_box].join(" ")}>
                            <img src={LOGO_IMG} alt="" />

                            <p>Change your TechSpecs account Password</p>
                            <div className={form_group}>
                                <div className={email_password}>
                                    <label>Enter your email</label>
                                    <div className={input_email}>
                                        <input
                                            type="email"
                                            className={this.state.forget_email_error_msg != "" ? ["form-control", error_border].join(" ") : !this.state.forget_email_active ? "form-control" : ["form-control", email_active_border].join(" ")}
                                            value={this.state.forgetemail}
                                            onChange={this.updateForgetEmail}
                                            onFocus={this.forgetEmailErrorUpdate}
                                            onKeyUp={this.emptyForgetEmailCheck}
                                        />
                                        {this.state.forget_email_error_msg != "" ?
                                            <p className={error_msg}>{this.state.forget_email_error_msg}</p> :
                                            ""
                                        }
                                        {this.state.error_result != "" ?
                                            <p className={error_msg}>{this.state.error_result}</p> :
                                            ""
                                        }
                                    </div>

                                    <div className={forget_button}>
                                        <div
                                            className={forget}
                                            children="Submit"
                                            onClick={this.forgethandleSubmit}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


        )
    }
}

const
    mapStateToProps = state => {
        return {
            user_detail: state.user_detail
        }
    }
export default connect(mapStateToProps)

    (
        Login
    )
