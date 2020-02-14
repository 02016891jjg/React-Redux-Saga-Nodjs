import React, {Component} from 'react'
import {API_URL} from '../../common/constants'
import PropTypes from 'prop-types'
import {btn_dark} from '../../containers/login/login.module.scss'
import {BACKEND_URL} from 'common/constants'
import {
    SAVE_USER_DETAIL,
    GET_USER_DETAIL,
} from "common/action.js";
import {connect} from 'react-redux'
type Props = {
    history: {
        push: (path: string) => any
    },
    dispatch: ({ type: string, payload: any }) => any,


}
class OAuthLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                email: '',
                creation_type: '',
                image: '',
                first_name: "",
                last_name: ''

            },
            disabled: ''
        }


    }


    componentDidMount() {
        const {socket, provider, className, iconClass, btnText} = this.props

        socket.on(provider, user => {
            // this.popup.close()
            this.setState({user})
        })
    }

    checkPopup() {
        const check = setInterval(() => {

            const {popup} = this
            console.log(this.state.user);
            if(Object.keys(this.state.user).length !== 0){
                if (!popup || popup.closed || popup.closed === undefined) {
                    clearInterval(check)
                    // console.log("close");
                    // console.log(this.state.user)
                    this.closeCard()
                    this.popup.close()
                    this.setState({disabled: ''})
                    // console.log(this.state.user)
                }else{
                    clearInterval(check)
                    this.popup.close();
                    this.registerSocial(this.state.user);
                    this.setState({disabled: ''})
                }
            }

        }, 4000)
    }
    async registerSocial(user) {
        const axios = require('axios');
        // const {user} = this.state;
        // const data = {email: user.email, creation_type: user.creation_type, image: user.image, first_name: user.first_name, last_name: user.last_name};
        let res = await axios.post(BACKEND_URL + '/sociallogin', user);
        if (typeof res.data.error == "undefined") {
            // this.props.dispatch({
            //     type: SAVE_USER_DETAIL,
            //     payload: {id: res.data.id, image: res.data.photo}
            // })

            console.log(res);
            localStorage.setItem('user_id', res.data.user_id);
            localStorage.setItem('image', res.data.photo);
            window.location = './';
        } else {
            console.log(res);
            this.setState({emailBox: true, error_msg: res.data.message})
            this.props.showErrorMsg(res.data.message);

        }


    }


    openPopup() {
        const {provider, socket} = this.props
        const width = 600, height = 600
        const left = (window.innerWidth / 2) - (width / 2)
        const top = (window.innerHeight / 2) - (height / 2)
        const url = `${API_URL}/${provider}?socketId=${socket.id}`

        return window.open(url, '',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
        )
    }

    startAuth = () => {
        if (!this.state.disabled) {
            this.popup = this.openPopup()
            this.checkPopup()
            this.setState({disabled: 'disabled'})
            this.props.showErrorMsg("");
        }
    }

    closeCard = () => {
        this.setState({user: {}})
    }

    render() {
        const {name, photo} = this.state.user
        const {provider, btnText, className, iconClass} = this.props
        const {disabled} = this.state
        const atSymbol = provider === 'twitter' ? '@' : ''

        return (
            <div
                onClick={this.startAuth}
                className={className || btn_dark}
            >
                  <span className="iconbutton-icon">
                    <i className={iconClass} aria-hidden="true"/>
                  </span>
                {btnText}
            </div>
        )
    }
}

OAuthLogin.propTypes = {
    provider: PropTypes.string.isRequired,
    socket: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        user_detail: state.user_detail
    }
}
export default connect(mapStateToProps)(OAuthLogin)