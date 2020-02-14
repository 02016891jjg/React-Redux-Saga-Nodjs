import React from 'react'
import {
    text,
    description,
    photos,
    cards,
    what_is_part,
    see_brand_button,
    download_title,
    what_is_part_inner
} from './styles/introducenew.module.scss'
import {
    DOWNLOAD_ICON,
    BRANDSTYLELOGO
} from 'common/images'

const IntroduceNew = () => {
    return (
        <div className={what_is_part_inner}>
            <div className={what_is_part}>
                <div className={text}>
                    <h1>Brand Guidelines.</h1>
                    <div className={description}>
                        We’ve created a kit for a simple but eﬀective usage of TechSpecs logo and trademark.
                    </div>
                    <button className={[see_brand_button, "btn"].join(" ")}>
                        <img src={DOWNLOAD_ICON} />
                        <span className={download_title}>Download Brand Assets </span></button>
                </div>
                <div className={photos}>
                    <div className={cards}>
                    {/* <iframe  width="605" height="430" src="https://www.youtube.com/embed/ojFZ7YBAgRU" frameborder="0" allowfullscreen>
	               </iframe> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default IntroduceNew