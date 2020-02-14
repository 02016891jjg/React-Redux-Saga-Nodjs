//@flow

import React from 'react'
import {
    text,
    description,
    discover_apps,
    our_apps,
    app,
    app_cont,
    vs1,
    explore,
    indiegogo,
    vs2,
    ces,
    kickstarter,
    app_name,
    disinner,
    dis_text_container,
    dis_text_inner,
    our_apps_inner1,
  our_apps_inner2,
  our_apps_outer
} from './styles/discoverApps.module.scss'
import {
    INDIEGOGO_IMG,
    COMPARE_IMG,
    CES_IMG,
    EXPORE_IMG,
    KICKSTARTER_IMG,
} from 'common/images'
import {inner} from "./styles/whatIs.module.scss";

const DiscoverApps = () => {
    console.log(vs1)
    const apps1 = [
        {
            appName: 'VS',
            description: 'The fastest way to compare two or more products, head to head.',
            img: COMPARE_IMG,
            className: `${app} ${vs1}`
        },

        {
            appName: 'Explore',
            description:
                'Our library puts thousands of electronic product specs at your fingertips.',
            img: EXPORE_IMG,
            className: `${app} ${explore}`
        },

        {
            appName: 'Indiegogo',
            description: 'Get tech specifications for products funded through Indiegogo.',
            img: INDIEGOGO_IMG,
            className: `${app} ${indiegogo}`
        },

    ];
    const apps2 = [
        {
            appName: 'CES',
            description: 'View detailed tech specs of products from 4,400+ exhibiting companies.',
            img: COMPARE_IMG,
            className: `${app} ${vs2}`
        },
        {
            appName: 'Kickstarter',
            description:
                'Search tech specs for all products funded through Kickstarter.',
            img: KICKSTARTER_IMG,
            className: `${app} ${kickstarter}`
         
        },
        {
            appName: 'And more…',
            description: 'Stay tuned for new updates and developments from the TechSpecs team!',
            img: CES_IMG,
            className: `${app} ${ces}`
        },
    ];

    return (
        <div className={discover_apps}>
            <div className={dis_text_container}>
                <div className={dis_text_inner}>
                    <div className={text}>
                        <p>Innovative and User-Friendly Apps</p>
                        <div className={description}>
                            We constantly develop and publish helper apps to improve our user’s experience on TechSpecs.
                        </div>
                    </div>
                </div>

            </div>

            <div className={our_apps}>
                <div className={our_apps_inner1}>

                    {apps1.map((app, index) => (
                        <div className={app.className} key={index}>
                            <div className={app_cont}>
                                <img src={app.img} alt={app.appName}/>
                                <p>{app.appName}</p>
                            </div>
                            <p className={app_name}>{app.appName}</p>
                            <div className={description}>
                                {app.description}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={our_apps_outer}>
                    <div className={our_apps_inner2}>
                        {apps2.map((app, index) => (
                            <div className={app.className} key={index}>
                                <div className={app_cont}>
                                    <img src={app.img} alt={app.appName}/>
                                    <p>{app.appName}</p>
                                </div>
                                <p className={app_name}>{app.appName}</p>
                                <div className={description}>
                                    {app.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default DiscoverApps
