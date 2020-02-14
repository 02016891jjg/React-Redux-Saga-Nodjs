//@flow

import React, {Component} from 'react'
import IconButton from 'components/common/IconButton'

import {
    authButton
} from 'utils/metaData'


// import TwitterLogin from 'react-twitter-auth'
// import GoogleLogin from 'react-google-login'
// import FacebookLogin from 'react-facebook-login';
// import GitHubLogin from 'react-github-login';


import OAuth from './OAuth'
import {API_URL} from '../../common/constants'
import io from 'socket.io-client'
import {
    btn_dark,
    button_group_inner,
    btn_fb,
    btn_tw,
    btn_gg,
    social_button
} from "../../containers/signup/signup.module.scss";
// const providers = ['twitter', 'google', 'facebook', 'github']
export const AuthButton = [
    {
        provider: 'facebook',
        btnText: 'Facebook',
        className: [btn_fb, social_button].join(" "),
        iconClass: 'fa fa-facebook'
    },
    {
        provider: 'twitter',
        btnText: 'Twitter',
        className: [btn_tw, social_button].join(" "),
        iconClass: 'fa fa-twitter'
    },
    {
        provider: 'google',
        btnText: 'Google',
        className: [btn_gg, social_button].join(" "),
        iconClass: 'fa fa-google'
    },
    {
        provider: 'github',
        btnText: 'Github',
        className: [btn_dark, social_button].join(" "),
        iconClass: 'fa fa-github'
    }
];
const socket = io.connect(API_URL,{ transports: ['polling'] })
const onFailed = (response) => {

}
const onSuccess = (response) => {
    console.log(response);
}
const responseGoogle = (response) => {
    console.log(response);
}
const responseFacebook = (response) => {
    console.log(response);
}

export default class ButtonGroup extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        fetch(`${API_URL}/wake-up`)
            .then(res => {
                if (res.ok) {
                    console.log('wakeup');
                }
            })
    }

    render() {
        return (
            <div className={button_group_inner}>
                {AuthButton.map((item, index) => {
                    return (
                        <OAuth
                            provider={item.provider}
                            key={item.provider}
                            socket={socket}
                            showErrorMsg={this.props.showErrorMsg}
                            className={item.className}
                            iconClass={item.iconClass}
                            btnText={item.btnText}
                        />
                    )

                })}
            </div>
        )
    }
}
// const ButtonGroup = () => {
//   return (
//       <div>
//         {/*{authButton.map((item, i) => (*/}
//             {/*<IconButton*/}
//                 {/*link={item.link}*/}
//                 {/*btnText={item.btnText}*/}
//                 {/*className={item.className}*/}
//                 {/*iconClass={item.iconClass}*/}
//                 {/*key={i}*/}
//             {/*/>*/}
//           {/*))}*/}
//           {providers.map(provider =>
//               <OAuth
//                   provider={provider}
//                   key={provider}
//                   socket={socket}
//               />
//           )}
//
//       </div>
//   )
// }
// export default ButtonGroup
