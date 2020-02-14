import React from 'react'
import {ReactTitle} from 'react-meta-tags';
import Header from '../header'
import Footer from '../footer/index'
import BrandStyle from './brandstyle.jsx'
import LogoUsage from './logousage.jsx'
import LogoColor from './logocolor'
import DownloadBrand from './downloadbrand'
import BrandMark from './brandmark'
import BrandPicture from './brandpicture'
import Typography from './typograph'
import PrimaryColor from './primarycolor'
import BrandFont from './brandfont'
import BrandText from './brandtext'
import TryTechSpecs from './trytechspecs'
import './styles/brandstyle.scss'

type State = {
    is_see_dark_version: boolean
}

class BrandGuideLines extends React.Component<State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            is_see_dark_version: false,
        }
    }
    onFeedBackClick = () => {
    }
    changeSeeVersion = () => {
        this.setState({ is_see_dark_version: !this.state.is_see_dark_version })
    }
    componentDidMount(): void {
        // function handleResize() {
        //     console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        //     if (window.innerWidth > 425) {
        //         document.getElementById("open_menu").style.display = "none";
        //         document.getElementById("close_menu").style.display = "none";
        //         document.getElementById("hdr-nav").style.display = "block";
        //     } else {
        //         document.getElementById("open_menu").style.display = "block";
        //         document.getElementById("close_menu").style.display = "none";
        //         document.getElementById("hdr-nav").style.display = "none";
        //     }
        // }
        //
        //
        // window.addEventListener('resize', handleResize);
    }
    // showMenu = () => {
    //     document.getElementById("open_menu").style.display = "none";
    //     document.getElementById("close_menu").style.display = "block";
    //     document.getElementById("hdr-nav").style.display = "block";
    //
    // }
    // closeMenu = () => {
    //     document.getElementById("open_menu").style.display = "block";
    //     document.getElementById("close_menu").style.display = "none";
    //     document.getElementById("hdr-nav").style.display = "none";
    //
    // }

    render() {
        const {
            is_see_dark_version,
            onFeedBackClick,
            changeSeeVersion,
        } = this.state
        return (
            <React.Fragment>
                <ReactTitle title="Brand Guidelines | TechSpecs"/>
                <Header onFeedBackClick={onFeedBackClick} headerClass="brand_header"  checked="brand"/>
                <BrandStyle />
                <LogoUsage
                    is_see_dark_version={is_see_dark_version}
                    changeSeeVersion={this.changeSeeVersion}
                />
                <LogoColor />
                <DownloadBrand />
                <BrandMark />
                <BrandPicture />
                <Typography />
                <PrimaryColor />
                <BrandFont />
                <BrandText />
                <TryTechSpecs />
                <Footer />
            </React.Fragment>

        )
    }

}

export default BrandGuideLines;