import React from 'react'
import {
introduce,
inner_introduce
} from './styles/introduce.module.scss'
import {
    CHROME_LOGO,
    Image_Solid
    } from 'common/images'
const Introduce = () =>{

    return(
        <div className={introduce}>
          
          <div className={inner_introduce}>
                   <p>Introducing</p>
                    <p>TechSpecs Assistant</p>

          </div>

         
        </div>
    )
}
export default Introduce