import React, {Component} from 'react'
import Header from 'components/header'
import {LOGO_IMG} from 'common/images'
import ButtonGroupLogin from 'components/common/ButtonGroupLogin'
import ButtonComponent from 'components/common/buttonComponent/ButtonComponent'
import {BACKEND_URL} from 'common/constants'
import {connect} from 'react-redux'
import {
    SAVE_USER_DETAIL,
    GET_USER_DETAIL,
} from "common/action.js";
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
    error_msg,
    active_border,
    main_wrapper,
    change_password_header
} from './changepass.module.scss'
import $ from "jquery";
// import {error_msg} from "../signup/signup.module.scss";
// import {error_msg} from "../signup/signup.module.scss";
// import {border_line} from "../signup/signup.module.scss";

class Changepassword extends Component {
    constructor(props) {
        super(props)
        const {userID} = this.props.match.params;
        this.state = {
            email: '',
            password: '',
            error_msg: "",
            forget_dialog_show: false,
            forget_password_error: "",
            forgetemail: "",
            user_id: userID,
            confirm_password: "",
            password_error: "",
            confirm_password_error: "",
            confirm_password_active:"",
            password_active: ""

        }
        this.updateEmail = this.updateEmail.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
    showConfirmPassword = () => {
        // this.setState({emailBox: !this.state.emailBox})
        $('#confirm_show_icon').addClass("hide");
        $('#confirm_hide_icon').removeClass("hide");
        $('#hide_icon').removeClass("hide");
        $('input[name=confirm_password]').attr('type', 'text');
    }
    hideConfirmPassword = () => {
        $('#confirm_show_icon').removeClass("hide");
        $('#confirm_hide_icon').addClass("hide");
        $('input[name=confirm_password]').attr('type', 'password');

    }

    updateEmail = e => {
        this.setState({email: e.target.value})
    }

    updateForgetEmail = e => {
        this.setState({forgetemail: e.target.value})
    }

    updatePassword = e => {
        this.setState({password: e.target.value})
        this.setState({password_error:"",confirm_password_error:""})
    }
    updateConfirmPassword = e => {
        this.setState({confirm_password: e.target.value})
        this.setState({password_error:"",confirm_password_error:""})
    }

    emptyCheck = (e) => {
        if(e.target.name == "password"){
            this.setState({password: e.target.value})
            if(this.state.password.length >= 8){
                this.setState({password_active: true});
            }else{
                this.setState({password_active: false});
            }
        }else{

            this.setState({confirm_password: e.target.value})
            if(this.state.confirm_password.length >= 8){
                this.setState({confirm_password_active: true});
            }else{
                this.setState({confirm_password_active: false});
            }
        }
    }

    handleSubmit(event) {

        this.setState({submitted: true, error_msg: ""})
        const {user} = this.state
        console.log("test")
        if (this.state.email && this.state.password) {
            // console.log(this.props.dispatch);
            this.login()
            // this.props.register(user);

        }
        event.stopPropagation()
    }

    forgethandleSubmit = (event) => {
        this.setState({forget_password_error: ""})
        if(this.state.confirm_password.length < 8){
            this.setState({confirm_password_error:"Password should be more than 8 characters."})
        }
        if(this.state.password.length < 8){
            this.setState({password_error:"Password should be more than 8 characters."})
        }
        if(this.state.password != this.state.confirm_password){
            this.setState({password_error:"Password doesn't match.",confirm_password_error:"Password doesn't match."})
        }
        if (this.state.password != "" && this.state.password == this.state.confirm_password) {
            this.changepassword()
        }
        event.stopPropagation()
    }

    async changepassword(event) {
        const axios = require('axios');
        const data = {password: this.state.password};
        console.log(data);
        let res = await axios.post(BACKEND_URL + '/changepassword/' + this.state.user_id, data);
        console.log(res);
        if (typeof res.data.error !== "undefined" && res.data.error == false) {
            localStorage.setItem('user_id', res.data.user.id);
            localStorage.setItem('image', res.data.user.photo);
            console.log(res);
            window.location = './login';
        } else {
            this.setState({forget_password_error: res.data.message})
        }
        return true;

    }

    showErrorMsg = (error_msg) => {
        this.setState({error_msg: error_msg})
    }
    showForgetDialog = () => {
        this.setState({forget_dialog_show: true})
    }

    async login() {
        const axios = require('axios');
        const data = {email: this.state.email, password: this.state.password, creation_type: "email"};
        let res = await axios.post(BACKEND_URL + '/user_login', data);
        console.log(res);
        if (typeof res.data.error !== "undefined" && res.data.error == false) {
            // this.props.dispatch({
            //     type: SAVE_USER_DETAIL,
            //     payload: {id: res.data.user.id, image: res.data.photo}
            // })
            localStorage.setItem('user_id', res.data.user.id);
            localStorage.setItem('image', res.data.user.photo);
            console.log(res);
            window.location = './';
        } else {
            this.setState({error_msg: res.data.message})
        }


    }

    render() {
        return (
            <div className="wrapper">
                <Header headerClass={change_password_header} onFeedBackClick={this.onFeedBackClick}/>
                <section className={main_wrapper}>
                    <div className={[forget_box, login_box].join(" ")}>
                        <img src={LOGO_IMG} alt=""/>

                        <p>Change your TechSpecs account Password</p>
                        <div className={form_group}>
                            <div className={email_password}>

                                <div className={input_password}>
                                    <label>Enter your new password</label>
                                    <input
                                        placeholder="Please enter minimum 8 characters."
                                        type="password"
                                        name="password"
                                        className={this.state.password_error != ""? ["form-control", error_border].join(" "): !this.state.password_active  ? "form-control" : ["form-control", active_border].join(" ")}
                                        value={this.state.password}
                                        onChange={this.updatePassword}
                                        onKeyUp={this.emptyCheck}
                                    />
                                    <div className={eye_icon} id="show_icon1" onClick={this.showPassword}>
                                        <i className="fa fa-eye"></i>
                                    </div>
                                    <div className={[eye_icon, "hide"].join(" ")} id="hide_icon"
                                         onClick={this.hidePassword}>
                                        <i className="fa fa-eye-slash"></i>
                                    </div>
                                    {this.state.password_error && (
                                        <p className={error_msg}>{this.state.password_error}</p>
                                    )}
                                </div>

                                <div className={input_password}>
                                    <label>Enter your new password again</label>
                                    <input
                                        type="password"
                                        name="confirm_password"
                                        className={this.state.confirm_password_error != ""? ["form-control",error_border ].join(" "): !this.state.confirm_password_active? "form-control" : ["form-control", active_border].join(" ")}
                                        value={this.state.confirm_password}
                                        onChange={this.updateConfirmPassword}
                                        placeholder="Please enter minimum 8 characters."
                                        onKeyUp={this.emptyCheck}
                                    />
                                    <div className={eye_icon} id="confirm_show_icon" onClick={this.showConfirmPassword}>
                                        <i className="fa fa-eye"></i>
                                    </div>
                                    <div className={[eye_icon, "hide"].join(" ")} id="confirm_hide_icon"
                                         onClick={this.hideConfirmPassword}>
                                        <i className="fa fa-eye-slash"></i>
                                    </div>
                                    {this.state.confirm_password_error && (
                                        <p className={error_msg}>{this.state.confirm_password_error}</p>
                                    )}
                                </div>

                                <div className={forget_button}>
                                    <div
                                        className={forget}
                                        children="Change Your password"
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

export default Changepassword
