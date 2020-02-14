import React from 'react'
import Lottie from 'react-lottie';
import './techspecsv2.json'
import './techspecsGoogle.json'
import Mailchimp from 'react-mailchimp-form';
import { Player, BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import {
    best_phone_part,
    text,
    description,
    input,
    button_try_now,
    for_example,
    photos,
    photo,
    cards,
    background,
    mocup,
    best_inner,
    chrome_logo_size,
    intro_part,
    mailchip,
    button,
    tri_button,
    back_apple,
    image_size,
    video_play1,
    video_palyer_part

} from './styles/introduce.module.scss'
 
import './styles/video.css'
import {
CHROME_LOGO,
Image_Solid,
Image_Background
} from 'common/images'


const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData:require('./techspecsGoogleDocsText.json'),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
const defaultOptions1 = {
  loop: true,
  autoplay: true, 
  animationData:require('./techspecsGoogle.json'),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
const defaultOptions2 = {
  loop: true,
  autoplay: true, 
  animationData:require('./techspecsv2.json'),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
const { detect } = require('detect-browser');
// abasic form

const CustomForm = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () =>
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });
    
        const browser = detect();
 
      return(
    <div style={{marginBottom:137}}>
      <div className={input}>
        <img src={CHROME_LOGO} className={chrome_logo_size}/>
        <input style={{border:'none'}} type="email" defaultValue="" placeholder={"Enter your email to add to "+browser.name} ref={node => (email = node)}/>
      <div className={button_try_now} onClick={submit}>Add to {browser.name}</div>
      </div>
      {status === "sending" && <div style={{ color: "white"}}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "white" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
          </div>
     

      );
    };


class Introduce extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        render: 1 
    }
   }
   componentDidMount() {
    setInterval(this.changeActiveMedia.bind(this), 12000);
  }
  changeActiveMedia() {

    this.setState({ render:this.state.render+1});
    if(this.state.render>3){
      this.setState({ render:1});
    }
  }

    render(){
      const url =
      "https://googletechspecs.us4.list-manage.com/subscribe/post?u=11297c5d43c0f285dc141636a&amp;id=0990c4a295";
      let component = null;
      switch(this.state.render) {
        case 1:
          component = <Lottie 
          options={defaultOptions2}
          height={400}
          width={507}
          />;
          break;
        case 2:
          component = <Lottie 
          options={defaultOptions1}
          height={400}
          width={507}
          />;
          break;
          case 3:
            component = <Lottie 
          options={defaultOptions}
          height={400}
          width={507}
          />;
            break;
        default:
      }
     
      console.log(this.state.render)
      return(
            <div className={best_phone_part}>
                {/* <img src={Image_Solid}/> */}
                <div className={best_inner}>
                    <div className={text}>
                      <div className={intro_part}>
                        <p>Introducing TechSpecs Extension</p>
                      </div>
                        <div className={description}>
                        TechSpecs extension is an innovative browser extension that uses staggered AI to automatically generate standardized tech specs for your online posts and electronics product listings.
                        </div>
                        <MailchimpSubscribe
                        url={url}
                        render={({ subscribe, status, message }) => (
                            <CustomForm
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                            />
                        )}
                        />
                    </div>
                    <div className={photos}>
                    <div className={cards}>

                      {/* <div className={back_apple}>
                            <div className={video_palyer_part + " video-play-part"}>
                              <Player
                                fluid={false} 
                                isFullscreen={true}
                                poster={require('../../assets/images/apple_phone_back.png')}
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                width={533}
                                height={400}
                              >
                                <BigPlayButton position="center" className={video_play1} style={{width: '100px'}}/>
                              </Player>
                            </div>              
                    
                            </div> */}  
                          <div className={back_apple}>        
                             {component}
                            </div>   
                    </div>
                    </div>
                </div>
              
            </div>
        )
    }

}
export default Introduce