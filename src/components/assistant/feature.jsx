import React from 'react'
import {feature_part,image_divide,revel_direction,reveal_size,reveal_description,button_try_now,f_image_divide} from './styles/feature.module.scss'
import {
  Image_reveal,
  Image_suggest,
  
} from 'common/images'
const Feature = () =>{
  
    return(
          <div className={feature_part}>
           <p>Features</p>
           <div className={image_divide}>
             <div>
               <img src={Image_reveal}/>
               <div className={revel_direction}>
                 <span className={reveal_size}>Reveal</span>
                 <p className={reveal_description}>While browsing your favorite second hand marketplace, TechSpecs will automatically analyze the product in question and reveal its standardized specs.</p>
               </div>
             </div>
             <div>
               <img src={Image_suggest}/>
               <div className={revel_direction}>
                 <span className={reveal_size}>Auto-Suggest</span>
                 <p className={reveal_description}>TechSpecs automatically detects tech gadgets as you write and suggests detailed standardized specs in text, widget or link format.</p>
               </div>
             </div>
           </div>
           <button className={[button_try_now, "btn"].join(" ")}>
           See the example
           </button>
         </div>
    )
}

export default Feature