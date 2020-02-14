//@flow


import React from 'react'
import {
    LOGO_IMG
} from 'common/images'
import { Link } from 'react-router-dom'
import {
    footer_container,
    logo,
    rights,
    columns_cont,
    col_cont,
    link_cont,
    footer_outer,
    columns_inner,
    link_path
} from './footer.module.scss'

const Footer = () => {
    const columns = [
        {
            name: "Products",
            links: [
                {
                    name: 'Search',
                    path: '/'
                },
                {
                    name: 'Extension',
                    path: '/extension'
                }
            ]
        },
        {
            name: "Company",
            links: [
                {
                    name: 'About',
                    path: '/about'
                },
                {
                    name: 'Guideline',
                    path: '/guideline'
                },
                {
                    name: 'Contact',
                    path: '/contact'
                },
                {
                    name: 'Terms',
                    path: '/terms'
                },
                {
                    name: 'Privacy',
                    path: '/privacy'
                }        
            
            ]
        },
        {
            name: "Social",
            links: [
                {
                    name: 'Facebook',
                    path: 'https://facebook.com/realtechspecs'
                },
                {
                    name: 'Twitter',
                    path: 'https://twitter.com/realtechspecs'
                },
                {
                    name: 'LinkedIn',
                    path: 'https://www.linkedin.com/company/techspecs/about'
                },
                {
                    name: 'Instagram',
                    path: 'https://instagram.com/realtechspecs'
                },
                {
                    name: 'Github',
                    path: 'https://github.com/techspecs/'
                }
            ]
        },
        {
            name: "Developers",
            links: [
                {
                    name: 'API',
                    path: ''
                },

            ]
        },
    ];

    return (
        <React.Fragment>
            <div className={footer_outer}>
                <div className={footer_container}>
                    <div className={logo}>
                        <img src={LOGO_IMG} alt="logo"></img>
                        <div className={rights}>© TechSpecs, Inc. All rights reserved</div>
                    </div>
                    <div className={columns_cont}>
                        {columns.map((col, cInd) => {
                            var temp = col.name;
                            return (<div className={columns_inner} key={cInd}>
                                <div className={col_cont} >
                                    <p> {col.name}</p>
                                    {col.links.map((link, lInd) => (
                                        <div className={link_cont} key={lInd}>
                                            <a target={temp !== "Social" ? "" : "_blank"} href={link.path}>
                                                {link.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer
