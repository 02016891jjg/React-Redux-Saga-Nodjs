//@flow

import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import $ from 'jquery';

import {
    minium_anything_part,
    color_part,
    color1,
    color2,
    color3,
    color4,
    color_item,
    part_area,
    color_title,
    color1x,
    color2x,
    color3x,
    primary_part,
    color_item1,
    content,
    section,
    primary_part_inner
} from './styles/primary.module.scss'
import {
    LOGO_IMG
} from 'common/images'

class PrimaryColor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            copied: false
        }
    }


    onClick = ({ target: { innerHTML } }) => {
        setTimeout(function () {
            $('#mydiv4').fadeOut('fast');
        }, 3000);

    };

    onCopy = () => {
        this.setState({ copied: true });
        $('#mydiv4').fadeIn('fast');
    };
    render() {
        console.log("color status ....")
        console.log(this.state.copied)
        return (
            <div className={primary_part_inner} >
                <div className={primary_part}>
                    <div className={minium_anything_part}>
                        <div className={color_part}>
                            <h6 className={color_title}>Primary colors</h6>
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
                                    text={'#91A8BF'}>
                                    <div className={[color_item, color3].join(" ")} onClick={this.onClick} >
                                        #91A8BF
                                </div>
                                </CopyToClipboard>
                                <CopyToClipboard
                                    onCopy={this.onCopy}
                                    text={'#242B2E'}>
                                    <div className={[color_item, color4].join(" ")} onClick={this.onClick}>
                                        #242B2E
                                </div>
                                </CopyToClipboard>
                            </div>

                        </div>

                        <div className={color_part}>
                            <h6 className={color_title}>Secondary colors</h6>
                            <div className={part_area}>
                                <CopyToClipboard
                                    onCopy={this.onCopy}
                                    text={'#FF8E76'}>
                                    <div className={[color_item1, color1x].join(" ")} onClick={this.onClick}>
                                        #FF8E76
                               </div>
                                </CopyToClipboard>
                                <CopyToClipboard
                                    onCopy={this.onCopy}
                                    text={'#FA624D'}>
                                    <div className={[color_item1, color2x].join(" ")} onClick={this.onClick}>
                                        #FA624D
                                </div>
                                </CopyToClipboard>
                                <CopyToClipboard
                                    onCopy={this.onCopy}
                                    text={'#8BD001'}>
                                    <div className={[color_item1, color3x].join(" ")} onClick={this.onClick}>
                                        #8BD001
                                </div>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mydiv4" className={section}>
                    {/* {this.state.copied ? <span className={content}>Color copied</span> : null} */}
                    <span className={content}>Color copied</span>

                </div>
            </div>
        )
    }
}
export default PrimaryColor
