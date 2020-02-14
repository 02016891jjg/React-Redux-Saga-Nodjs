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
} from './styles/sales.module.scss'
import {
CHROME_LOGO,
VIDEO_GENERATE
} from 'common/images'

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData:require('./techspecsv2.json'),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const SellFast = () =>{
   
    return(
        <div className={best_phone_part}>
            <div className={best_inner}>
               <div className={photos}>
               <Lottie 
                     options={defaultOptions}
                     height={449}
                     width={558}
                     />
                </div>
                <div className={text}>
                    <p>Sell faster, make</p>
                    <p>more money.</p>
                    <div className={description}>
                    If you sell electronics online, TechSpecs empowers you to post what you’re selling, and automatically attach standardized tech specs and reviews for your products—so you can turn those posts into sales, fast.
                    </div>                  
                </div>
            </div>
        </div>
    )

}
export default SellFast