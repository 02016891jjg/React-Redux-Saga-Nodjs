//@flow

import React from 'react'
import {
    text,
    description,
    compare_anything_part,
    switch_toggle,
    slider,
    round,
    clear_seek,
    clear_space,
    clear,
    seek,
    image_padding,
    seek_dark_version,
    compare_anything_part_inner,
    black_background,
    white_color
} from './styles/logousage.module.scss'
import {
    BIG_LOGO,
    BIG_LOGO_WHITE
} from 'common/images'
type Props = {
    is_see_dark_version: boolean,
    changeSeeVersion: (val: any) => any,
}
const LogoUsage = (props: Props) => {
    const {
        is_see_dark_version,
        changeSeeVersion
    } = props
    return (
        <div className={is_see_dark_version ? [compare_anything_part_inner, black_background].join(" ") : compare_anything_part_inner}>
            <div className={compare_anything_part}>
                <div className={text}>
                    <h1 className={is_see_dark_version ? white_color : ""}>Logo usage.</h1>
                    <div className={is_see_dark_version ? [description, white_color].join(" ") : description}>
                        It’s vital that you never modify our logo in any way, don’t use our logo too small or use it in a way that makes it hard to read.
                    </div>
                </div>
                <div className={clear_seek}>
                    <div className={clear_space}>
                        <span className={is_see_dark_version ? [clear, white_color].join(" ") : clear} >Clear space</span>
                        <div className={seek_dark_version}>
                            <span className={is_see_dark_version ? [seek, white_color].join(" ") : seek}>See Dark Version</span>
                            <label className={switch_toggle}>
                                <input
                                    type="checkbox"
                                    onChange={changeSeeVersion}
                                />
                                <span className={[slider, round].join(" ")}></span>
                            </label>
                        </div>


                    </div>

                </div>
                <div className={image_padding}>
                    <img src={is_see_dark_version ? BIG_LOGO_WHITE : BIG_LOGO}></img>
                </div>

            </div>
        </div>


    )
}

export default LogoUsage
