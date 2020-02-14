import React from 'react'
import {
  try_part,
  see_brand_button,
  download_title,
  part,
  now_title
} from './styles/trytech.module.scss'
const TryTechSpecs = () => {

  return (
    <div className={try_part}>
      <div className={part}>
        <h1 className={now_title}>Try TechSpecs now.</h1>
        <a href="/">
          <button className={[see_brand_button, "btn btn-primary"].join(" ")}>Start Finding Specs.</button>
        </a>
      </div>

    </div>
  )
}

export default TryTechSpecs