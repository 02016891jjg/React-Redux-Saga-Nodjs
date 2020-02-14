import React from 'react'
import {
    brand_mark_part,
    brand_mark_title,
    brand_mark_description,
    brand_mark_part_inner
} from './styles/typography.module.scss'

const Typography = () => {

    return (
        <div className={brand_mark_part_inner}>
            <div className={brand_mark_part}>
                <div className={brand_mark_title}>
                    <h1>Typography &<br></br>color usage...</h1>
                    <div className={brand_mark_description}>
                        TechSpecs Color palette is created with the attention to all possible use cases. It contains blue & white as primary colors alongside with shades of grey.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Typography