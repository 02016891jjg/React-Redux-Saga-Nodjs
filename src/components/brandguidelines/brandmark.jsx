import React from 'react'
import {
    brand_mark_part,
    brand_mark_title,
    brand_mark_description,
  brand_mark_part_inner
} from './styles/brandmark.module.scss'

const BrandMark = () => {

    return (
        <div className={brand_mark_part_inner}>
            <div className={brand_mark_part}>
                <div className={brand_mark_title}>
                    <h1>Brandmark.</h1>
                    <div className={brand_mark_description}>
                        It’s very important for us to keep the best quality of materials we produce or which are
                        produced under our name. That’s why we are showing the way of our brand mark usage on different
                        types of graphics.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandMark