//@flow

import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Button from '../common/buttonComponent/ButtonComponent'
import HeaderButton from '../common/HeaderButton'
import { LOGO_IMG, HEADER_CLOSE, HEADER_OPEN, DEFAULT_IMG } from 'common/images'
import { Dropdown } from 'react-bootstrap'
import './styles.scss'
import profilephoto from '../../assets/images/1.jpg'

type Props = {
    onFeedBackClick: () => any,
    location: Object,
    headerClass?: string,
    feedbackButton?: string,
    showMenu: () => any,
    closeMenu: () => any,
    about_hdr?: string,
    onSignupButtonClass?: string,
    onLoginButtonClass?: string,
    onAssistant?:string,
    checked:string,
    browser?:string
}

const Header = (props: Props) => {
    const [signupClass, setSignupClass] = useState('btn btn-header')
    const [loginClass, setLoginClass] = useState('btn btn-header')
    const [user_id, setUserID] = useState('')
    const [image, setUserImage] = useState('')
    const [open_drodown, setDropDown] = useState(false)
    // const {
    //     showMenu,
    //     closeMenu,
    //
    // } = props

    useEffect(() => {
        if (props.location.pathname === '/signup') {
            setSignupClass('btn btn-header select-button')
        }
        if (props.location.pathname === '/login') {
            setLoginClass('btn btn-header select-button')
        }
        setUserID(localStorage.getItem('user_id') || "")
        setUserImage(localStorage.getItem('image') || "")

        function handleResize() {
            // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
            if (window.innerWidth > 685) {
                // document.getElementById("open_menu").style.display = "none";
                // document.getElementById("close_menu").style.display = "none";
                // document.getElementById("hdr-nav").style.display = "block";
            } else {
                // document.getElementById("open_menu").style.display = "block";
                // document.getElementById("close_menu").style.display = "none";
                // document.getElementById("hdr-nav").style.display = "none";
            }
        }

        window.addEventListener('resize', handleResize);

    }, [])

    const switchDropDown = () => {
        if (open_drodown == true) {
            setDropDown(false)
        } else {
            setDropDown(true)
        }

        console.log(open_drodown);
    }

    const logOut = () => {

        localStorage.removeItem('user_id');
        localStorage.removeItem('image');
        window.location = './';
    }

    const showMenu = () => {
        document.getElementById("open_menu").style.display = "none";
        document.getElementById("close_menu").style.display = "block";
        document.getElementById("hdr-nav").style.display = "flex";

    }
    const closeMenu = () => {
        document.getElementById("open_menu").style.display = "block";
        document.getElementById("close_menu").style.display = "none";
        document.getElementById("hdr-nav").style.display = "none";

    }
   console.log("browser")
   console.log(props.browser)
    return props.onAssistant !=="assistant"?(
        <header className={props.headerClass}>
            <div className="hdr">
                <div className="hdr-logo">
                    <Link to="/">
                        <img src={LOGO_IMG} className="hder_image" alt="" />
                    </Link>
                </div>
                <div className="hdr-bar" id="open_menu" onClick={showMenu}>
                    <img src={HEADER_OPEN} />
                </div>
                <div className="hdr-bar" id="close_menu" onClick={closeMenu}>
                    <img src={HEADER_CLOSE} />
                </div>
                <div className="hdr-nav" id="hdr-nav">
                    <ul>
                        <li >
                            <Link to="/about" className={props.checked ==="about"?"click_line":""}>About</Link>
                        </li>
                        <li >
                            <Link to="/guideline" className={props.checked === "brand"?"click_line":""}>Brand Guidelines</Link>
                        </li>
                    
                        <li >
                            <Link to="/contact" className={props.checked === "contact"?"click_line":""}>Contact</Link>
                        </li>
                        <li >
                            <Link to="#" className={props.checked === "send"?"click_line":""}>Send Feedback</Link>
                        </li>

                        {
                            user_id == "" ? <>
                                <Link to="/signup" className="sign_title"><Button className={props.onSignupButtonClass ? "header-signup btn signup_class" : "header-signup btn"}>Sign
                                    up</Button></Link>
                                <Link to="/login" className="login_title"><Button className={props.onLoginButtonClass ? "header-login btn login_class" : "header-login btn"}>Log
                                    in</Button></Link>
                            </> : <>
                                    <div className="user_image" onClick={switchDropDown}>
                                        <div className="round_image">
                                            <img src={image != "null" ? image : DEFAULT_IMG} />
                                        </div>
                                        <div className={!open_drodown ? "dropdown" : "dropdown dropdown_open"}>
                                            <span className={!open_drodown ? "caret" : "caret open_caret"}></span>
                                        </div>
                                        <div className={!open_drodown ? "top_narrow" : "top_narrow dropdown_open"}>
                                            <div className={!open_drodown ? "dropdown_menu" : "dropdown_menu dropdown_open"}>
                                                <ul>
                                                    <li><a href="/profile">Profile</a></li>
                                                    <li><a href="/">Settings</a></li>
                                                    <div className="border_line"></div>
                                                    <li><a onClick={logOut}>Logout</a></li>
                                                </ul>
                                                {/*<span className="fa-caret-up"></span>*/}
                                            </div>
                                        </div>

                                    </div>
                                </>
                        }
                    </ul>

                </div>
            </div>
        </header>
    ):(
        <header className={props.headerClass}>
        <div className="hdr">
            <div className="hdr-logo">
                <Link to="/">
                    <img src={LOGO_IMG} className="hder_image" alt="" />
                </Link>
                <span style={{marginLeft:10,fontWeight:'bold'}}>Extension</span>
            </div>
            <div className="hdr-nav">
                    <ul>
                        <li>
                            <Link to="/about">About TechSpecs</Link>
                        </li>
                    </ul>
                    <Button className="header_add_btn">Add to {props.browser.name}</Button>
            </div>        
           
        </div>
    </header>
    )
}
export default withRouter(Header)
