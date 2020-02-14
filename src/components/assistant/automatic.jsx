import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './techspecsv2.json'
import {
    best_phone_part,
    text,
    description,
    input,
    button_try_now,
    for_example,
    photos,
    photo,
    cards,
    background,
    mocup,
    best_inner,
    chrome_logo_size,
    image_size
} from './styles/automatic.module.scss'
import {
CHROME_LOGO,
IMAGE_GENERATE
} from 'common/images'


const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData:require('./techspecsGoogle.json'),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  
const Automatic = () =>{
    
    console.log("svgfileeeeeeee")
    console.log(animationData)
    return(
        <div className={best_phone_part}>
            <div className={best_inner}>
                <div className={text}>
                    <p>Automatically generate standardized techspecs</p>
                    <div className={description}>
                    If you’re a YouTube creator, tech blogger or technical writer, you won’t need to manually research specs ever again. Posts on your favorite platforms will always have specs— which saves tons of time for you.
                    </div>
                </div>
                <div className={photos} >
                 {/* <img src={IMAGE_GENERATE} className={image_size}/> */}
                 <Lottie 
                     options={defaultOptions}
                     height={449}
                     width={558}
                     />
                </div>
            </div>
        </div>
    )

}
export default Automatic