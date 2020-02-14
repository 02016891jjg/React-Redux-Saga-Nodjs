//@flow

import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import $ from 'jquery';
import {
    minium_anything_part,
    minium_part,
    size_part,
    color_part,
    color1,
    color2,
    color3,
    color_item,
    size_title,
    size_pixel,
    size_image,
    part_area,
    color_title,
    minium_anything_part_inner,
    section,
    content

} from './styles/logocolor.module.scss'
import {
    LOGO_IMG
} from 'common/images'

class LogoColor extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            copied: false
        }

    }

    onClick = ({ target: { innerHTML } }) => {
        setTimeout(function () {
            $('#mydiv').fadeOut('fast');
        }, 3000);
    };

    onCopy = () => {
        this.setState({ copied: true });
        $('#mydiv').fadeIn('fast');
    };
    render() {
        return (
            <div className={minium_anything_part_inner}>
                <div className={minium_anything_part}>
                    <div className={minium_part}>
                        <div className={size_part}>
                            <h6 className={size_title}>Minimum size</h6>
                            <p className={size_pixel}>Print: .125 inch&bull;Digital: 26 pixels</p>
                            <img className={size_image} src={LOGO_IMG} />
                        </div>
                        <div className={color_part}>
                            <h6 className={color_title}>Logo colors</h6>
                            <div className={part_area}>
                                <CopyToClipboard
                                    onCopy={this.onCopy}
                                    text={'#03A9F4'}>
                                    <div className={[color_item, color1].join(" ")} onClick={this.onClick}>
                                        #03A9F4
                                </div>
                                </CopyToClipboard>
                                <CopyToClipboard
                                    onCopy={this.onCopy}
                                    text={'#1976D2'}>
                                    <div className={[color_item, color2].join(" ")} onClick={this.onClick}>
                                        #1976D2
                                   </div>
                                </CopyToClipboard>
                                <CopyToClipboard
                                    onCopy={this.onCopy}
                                    text={'#242B2E'}>
                                    <div className={[color_item, color3].join(" ")} onClick={this.onClick}>
                                        #242B2E
                                 </div>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mydiv" className={section}>
                    {/* {this.state.copied ? <span className={content}>Color copied</span> : null} */}
                    <span className={content}>Color copied</span>
                </div>
            </div>


        )
    }

}

export default LogoColor
