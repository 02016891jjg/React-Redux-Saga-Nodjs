import React from 'react'
import {ReactTitle} from 'react-meta-tags';
import Header from '../header'
import Introduce from './introduce'
import IntroduceNew from './introudcenew'
import Automatic from './automatic'
import SellFast from './sellfast'
import Feature from './feature'
import Market from './market'
import Flex from './flex'
import YouTubeVideo from './youtube'
import {
    about_us_page,
    text,
    already_excited,
    button1,
    button2,
    about_header,
    buttons,
    about_hdr,
    border_background,
    border_margin,
    border_content,
    selling_part
} from './styles/assistant.module.scss'
import Footer from 'components/footer'
const { detect } = require('detect-browser');
class Assistant extends React.Component{
    constructor(props){
        super(props);
        this.state={
          browser:detect()
        }
    }
    render(){
        return(
            <React.Fragment>
              <ReactTitle title="Extension | TechSpecs"/>
              <Header onAssistant="assistant" headerClass="assitant_header" browser={this.state.browser}/>
              <div className={about_us_page}>
                <Introduce/>
                <div className={selling_part}>
                  <p>Selling electronics online is about to get a whole lot easier…</p>
                </div>
                <Automatic/>
                <SellFast/>
                <Feature/>
                <Market/>
                <YouTubeVideo/>
                <Flex/>
                <Footer/>
              </div>
            </React.Fragment>
        )
    }
}
export default Assistant