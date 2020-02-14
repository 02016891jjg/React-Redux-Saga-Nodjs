//@flow

import React from 'react'
import {
    text,
    description,
    photos,
    compare_anything_part,
    start,
    screen1,
    screen2,
    compare_inner
} from './styles/compareAnything.module.scss'
import {
    SCREEN1,
    SCREEN2,
    OBJECTDEVICE
} from 'common/images'

const CompareAnything = () => {

    return (
        <div className={compare_anything_part}>
            <div className={compare_inner}>
                <div className={text}>
                    <p>Unlock Instant, Effortless Comparisons</p>
                    <div className={description}>
                    You’ve never experienced specs comparison like this before. Our innovative, powerful, and user-friendly VS app makes it easy to compare specs, camera capability, battery life and more in order to find the perfect device for your needs.
                    </div>
                    <div className={start}> Start Comparing</div>
                </div>
                <div className={photos}>
                    {/*<img className={screen1} src={OBJECTDEVICE}></img>*/}

                </div>
            </div>
        </div>

    )
}

export default CompareAnything
