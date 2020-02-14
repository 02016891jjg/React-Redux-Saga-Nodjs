//@flow

import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ReactDOM from 'react-dom'
import {
    text,
    description,
    background,
    integrate_part,
    platforms_container,
    container,
    text_container,
    link,
    wp,
    shopify,
    youtube,
    tech_specs,
    integrate_inner,
    integrate_text,
    grid,
    integrate_one_part,
    container_text,
    container_text_white
} from './styles/integrate.module.scss'
import {
    LOGO_YOUTUBE,
    LOGO_WORDPRESS,
    LOGO_SHOPIFY,
    LOGO1,
    API_Logo
} from 'common/images'
import { Link } from 'react-router-dom'

const Integrate = () => {
    const data = [
        {
            logo: LOGO_WORDPRESS,
            description: 'WordPress users can generate specs automatically, then embed the results into your blog or website.',
            link: {
                text: '',
                path: ''
            },
            class: `${description} ${wp}`,
            text:'APII'
        },
        {
            logo: LOGO_SHOPIFY,
            description: 'Make your products stand out by automatically generating and embedding specs to your online store.',
            link: {
                text: '',
                path: ''
            },
            class: `${description} ${shopify}`,
            text:'APII'
        },
        {
            logo: LOGO_YOUTUBE,
            description: 'In seconds, you can view the detailed specs of any product featured on a YouTube video.',
            link: {
                text: '[View Demo]',
                path: ''
            },
            class: `${description} ${youtube}`,
            text:'APII'
        },
        {
            logo: LOGO1,
            description: 'Incorporate our simple, user-friendly API and documentation into your custom app projects.',
            link: {
                text: '[Get API]',
                path: ''
            },
            class: `${description} ${tech_specs}`,
            text:'API'
        }
    ]

    return (
        <div className={integrate_part}>
            <div className={integrate_inner}>
                <div className={integrate_text}>
                    <p>Multi-Platform Integration to Make Your Life Easier</p>
                    <div className={description}>
                      Our innovative API seamlessly integrates into a variety of popular platforms, making it easy to quickly generate customized, site-specific spec lists.
                    </div>
                </div>
                <div className={platforms_container}>
                    <div className={grid}>
                        {data.map((item, index) => (
                            <div className={integrate_one_part} key={index}>
                                <div className={container}>
                                    <img src={item.logo} style={{width:200,marginLeft:35}}/>
                                     <span className={item.text !=="API"?container_text_white:container_text}>{item.text}</span>
                                    <div className={item.class}>
                                        <div className={background}></div>
                                        <div className={text_container}>
                                            <div className={text}>
                                                {item.description}
                                                {item.link && item.link.text && (
                                                    <Link to={item.link.path} className={link}>
                                                        {item.link.text}
                                                    </Link>
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Integrate
