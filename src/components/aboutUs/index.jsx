//@flow

import React from 'react'
import {ReactTitle} from 'react-meta-tags';
 
import {
    about_us_page,
    text,
    already_excited,
    button1,
    button2,
    about_header,
    buttons,
    about_hdr,
    border_background,
    border_margin,
    border_content,
    text_small_part
} from './styles/aboutUs.module.scss'
import Header from '../header'
import WhatIs from './whatIs'
import BestPhone from './bestPhone'
import DiscoverApps from './discoverApps'
import CompareAnything from './compareAnything'
import Integrate from './integrate'
import Footer from '../footer/index'

const AboutUs = () => {
    const onFeedBackClick = () => {
    };
    // const showMenu = () => {
    //     document.getElementById("open_menu").style.display = "none";
    //     document.getElementById("close_menu").style.display = "block";
    //     document.getElementById("hdr-nav").style.display = "block";
    //
    // }
    // const closeMenu = () => {
    //     document.getElementById("open_menu").style.display = "block";
    //     document.getElementById("close_menu").style.display = "none";
    //     document.getElementById("hdr-nav").style.display = "none";
    //
    // }
    React.useEffect(() => {
        // function handleResize() {
        //     console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        //     if (window.innerWidth > 560) {
        //         document.getElementById("open_menu").style.display = "none";
        //         document.getElementById("close_menu").style.display = "none";
        //         document.getElementById("hdr-nav").style.display = "block";
        //     } else {
        //         document.getElementById("open_menu").style.display = "block";
        //         document.getElementById("close_menu").style.display = "none";
        //         document.getElementById("hdr-nav").style.display = "none";
        //     }
        // }
        //
        //
        // window.addEventListener('resize', handleResize);
    })

    return (
        <React.Fragment>
            <ReactTitle title="About Us | TechSpecs"/>
            <Header onFeedBackClick={onFeedBackClick}
                headerClass={about_header} hdrClass={about_hdr}   checked="about" />
            <div className={about_us_page}>
                <WhatIs />
                <BestPhone />
                <DiscoverApps />
                <CompareAnything />
                <Integrate />
                <div className={already_excited}>
                    <p className={text_small_part}>
                    We’re always looking for ways to make our industry-leading products even better.
                    </p>
                    <p className={text_small_part}>If you have an idea for a new app or integration opportunity, let us know below.</p>
                    <div className={buttons}>
                        <div className={button1}>
                           Submit App Idea
                        </div>
                        <div className={button2}>
                           Suggest Integration
                        </div>
                    </div>
                </div>
                <div className={border_background}>
                    <div className={border_margin}>
                        <div className={border_content}></div>
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default AboutUs
