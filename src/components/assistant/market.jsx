import React from 'react'
import {feature_part,image_divide,revel_direction,reveal_size,reveal_description,button_try_now} from './styles/market.module.scss'
import {
    Image_market,
    Image_social,
    Image_browser
  
} from 'common/images'
const Market = () =>{
  
    return(
          <div className={feature_part} style={{padding:0}}>
           <div className={image_divide} style={{flex:1}}>
             <div style={{background:'white',flex:1}}>
               <img src={Image_market} style={{width:216,height:141,paddingTop:58}}/>
               <div className={revel_direction} style={{paddingTop:28}}>
                 <span className={reveal_size}>Supports Over 150</span>
                 <span className={reveal_size}> Online Marketplaces</span>
                 <p className={reveal_description}>TechSpecs works with Facebook Marketplace, Craigslist, Letgo and over a hundred more popular online marketplaces.</p>
               </div>
             </div>
             <div style={{flex:1}}>
               <img src={Image_browser} style={{width:145,height:139,paddingTop:49}}/>
               <div className={revel_direction} style={{paddingTop:39}}>
                 <span className={reveal_size}>Compatible with your</span>
                 <span className={reveal_size}>Favorite Browsers</span>
                 <p className={reveal_description}>With a few clicks, TechSpecs can be added to your favorite browsers, including Chrome, Safari, Firefox & Edge.</p>
               </div>
             </div>            
             <div style={{background:'white',flex:1}}>
               <img src={Image_social} style={{width:157,height:138,paddingTop:49}}/>
               <div className={revel_direction} style={{paddingTop:39}}>
                 <span className={reveal_size}>Integrates to Email</span>
                 <span className={reveal_size}>and Social Media</span>
                 <p className={reveal_description}>TechSpecs integrates with Gmail, Medium, Facebook, Twitter and more.</p>
               </div>
             </div>
           </div>
         </div>
    )
}

export default Market