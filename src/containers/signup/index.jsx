import React, { Component } from 'react'
import {ReactTitle} from 'react-meta-tags';
import Header from 'components/header'
import ButtonGroup from 'components/common/ButtonGroup'
import ButtonComponent from 'components/common/buttonComponent/ButtonComponent'
import * as EmailValidator from 'email-validator'
import { LOGO_IMG, SIGN_FORWORD_ICON } from 'common/images'
import { BACKEND_URL } from 'common/constants'
import { connect } from 'react-redux'
import $ from "jquery";
import {
    SAVE_USER_DETAIL,
    GET_USER_DETAIL,
} from "common/action.js";
import './signup.scss'
import {
    email_box,
    password_box,
    form_group,
    blue_arrow,
    input_email,
    button_group,
    // btn_dark,
    // input_password,
    eye_icon,
    border_line,
    main_wrapper,
    input_border,
    input_email_inner,
    input_password,
    create_account,
    hide_eye_icon,
    error_msg,
    error_input_border,
    empty_password_color,
    active_password_border,
    border_outer,
    or,
    border_or,
    continue_with
} from './signup.module.scss'

type Props = {
    history: {
        push: (path: string) => any
    },
    dispatch: ({ type: string, payload: any }) => any,


}


class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                email: '',
                password: '',
                id: '',
                image: '',
                creation_type: 'email'

            },
            arrow: false,
            emailBox: true,
            submitted: false,
            error_msg: "",
            is_inputActive: false,
            error_password_length: false,
            empty_password_input: true,
            password_active: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.register = this.register.bind(this)

    }

    handleChange = event => {
        const { name, value } = event.target
        const { user } = this.state
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        })
        this.setState({ submitted: false, error_password_length: false })
        if (event.target.name === 'email') {
            
            this.setState({ error_msg: "" })
        
            if (EmailValidator.validate(this.state.user.email)) {
                this.setState({ arrow: true })
            } else {
                this.setState({ arrow: false })
            }
        }
        if (event.target.name === "password" && event.target.value == "") {
            this.setState({ empty_password_input: true });
        } else {
            this.setState({ empty_password_input: false });
            if (event.target.value.length >= 8) {
                this.setState({ password_active: true });
            } else {
                this.setState({ password_active: false });
            }
        }
    }
    checkValid = (e) => {
        if (e.target.name === 'email') {
            if (EmailValidator.validate(e.target.value)) {
                this.setState({ arrow: true })
            } else {
                this.setState({ arrow: false })
            }
        } else {
            if (e.target.value == "") {
                this.setState({ error_password_length: true })
            }
        } 
    }
    showPasswordDialog = () => {
        this.setState({ emailBox: !this.state.emailBox, error_msg: "" })
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
    inputActive = () => {

        this.setState({ submitted: false, empty_password_input: false })
    }

    handleSubmit(event) {
        this.setState({ submitted: true })
        const { user } = this.state
        // console.log("test")
        if (user.password) {
            if (user.password.length < 8) {
                this.setState({ error_password_length: true });
            } else {
                this.register()
            }
        }
        event.stopPropagation()
    }

    showErrorMsg = (error_msg) => {
        this.setState({ error_msg: error_msg })
    }

    async register() {
        const axios = require('axios');
        const { user } = this.state;
        const data = { email: user.email, password: user.password, creation_type: "email" };
        let res = await axios.post(BACKEND_URL + '/user_register', data);
        console.log(res);
        if (typeof res.data.error == "undefined") {
            // this.props.dispatch({
            //     type: SAVE_USER_DETAIL,
            //     payload: {id: res.data.id, image: ""}
            // })
            // console.log(res);
            localStorage.setItem('user_id', res.data.user_id);
            localStorage.setItem('image', "");
            window.location = './';
        } else {
            this.setState({ emailBox: true, error_msg: res.data.message, arrow: false })

        }
    }
    componentDidUpdate() {
    }
    render() {
        return (
            <div className="wrapper">
                <ReactTitle title="Sign Up | TechSpecs"/>
                <Header headerClass="signup_header" onSignupButtonClass="signup_class" onFeedBackClick={this.onFeedBackClick} />
                <section className={main_wrapper}>
                    {this.state.emailBox && (
                        <div className={email_box}>
                            <img src={LOGO_IMG} alt="" />
                            <p>
                                Welcome to TechSpecs. <b>Continue with your e-mail</b> or your
                                social media to get access to all features.
                            </p>
                            <div className={form_group}>
                                <div className={input_email}>
                                    <div className={input_email_inner}>
                                        <label>Continue with e-mail</label>
                                        <input
                                             name="email"
                                             type="text"
                                             className={this.state.error_msg == "" ? this.state.arrow ? [input_border, "form-control"].join(" ") : "form-control" : [error_input_border, "form-control"].join(" ")}
                                             value={this.state.user.email}
                                             onChange={this.handleChange}
                                             onKeyUp={this.checkValid}
                                        />
                                        {
                                          this.state.user.email ==="" || !this.state.arrow &&( 
                                            <span className="error_message">Please include "@" and ".com" in the email adress.</span>
                                           )
                                        }
                                        {this.state.arrow && (
                                            <div className={blue_arrow} onClick={this.showPasswordDialog}>
                                                {/*<i className="fa fa-long-arrow-right"></i>*/}
                                                <img src={SIGN_FORWORD_ICON} />
                                            </div>
                                        )}
                                        {this.state.error_msg != "" ?
                                            <p className={error_msg}>{this.state.error_msg}</p> :
                                            ""
                                        }
                                    </div>

                                    <div className={border_outer}>
                                        <div className={border_or}>
                                            <div className={border_line}></div>
                                            <span className={or}>OR</span>
                                            <div className={border_line}></div>
                                        </div>

                                        {/*<span className={continue_with}>Continue with</span>*/}
                                    </div>

                                </div>
                                <div className={button_group}>
                                    <ButtonGroup
                                        showErrorMsg={this.showErrorMsg}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    {!this.state.emailBox && (
                        <div className={password_box}>
                            <img src={LOGO_IMG} alt=""/>
                            <p>
                                We see that you are a new member. <br/>
                                <b>Create your password</b> below to be a TechSpecs member.
                            </p>
                            <div className={form_group}>
                                <div className={input_password}>
                                    <label>Create your password</label>
                                    <div className={input_email}>
                                        <input
                                            autoFocus
                                            autoComplete="off"
                                            name="password"
                                            type="password"
                                            // this.state.arrow ? [input_border, "form-control"].join(" "): "form-control" : [error_input_border, "form-control"].join(" ")
                                            className={this.state.password_active ? ["form-control", active_password_border].join(" ") : this.state.error_password_length || (this.state.submitted && !this.state.user.password) ? ["form-control", error_input_border].join(" ") : "form-control"}
                                            value={this.state.user.password}
                                            onChange={this.handleChange}
                                            onFocus={this.inputActive}
                                            placeholder="Please enter minimum 8 characters."
                                        />
                                        <div className={eye_icon} id="show_icon" onClick={this.showPassword}>
                                            <i className="fa fa-eye" ></i>
                                        </div>
                                        <div className={[eye_icon, "hide"].join(" ")} id="hide_icon" onClick={this.hidePassword}>
                                            <i className="fa fa-eye-slash" ></i>
                                        </div>
                                        {!this.state.error_password_length && (this.state.submitted && !this.state.user.password) && (
                                            <p className={error_msg}>Please enter your password.</p>
                                        )}
                                        {this.state.error_password_length && (
                                            <p className={error_msg}>Password should be more than 8 characters.</p>
                                        )}

                                    </div>
                                </div>
                                <div className={button_group}>
                                    <div
                                        children="Create Your Account"
                                        className={create_account}
                                        onClick={this.handleSubmit}
                                    />
                                    {this.state.status}
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user_detail: state.user_detail
    }
}
export default connect(mapStateToProps)(Signup)