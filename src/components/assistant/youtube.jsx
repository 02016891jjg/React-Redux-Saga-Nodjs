import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import YouTube from '@u-wave/react-youtube';
import ReactPlayer from 'react-player'

// import YouTube from 'react-youtube';
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
    button,
    tri_button,
    btn_inner,
    span_text,
    watch_text,
    image_phone_youtube,
    video_play1,
    video_play2
} from './styles/youtube.module.scss'
import './styles/video.css'
import {
CHROME_LOGO,
VIDEO_GENERATE
} from 'common/images'

class YouTubeVideo extends React.Component{
   
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.state={
            videoPlay: false
        }
    }
   componentDidMount(){
        
   }
   play() {
       this.setState({videoPlay: true});
   }
   pause() {
        this.setState({videoPlay: false})
   }
    render(){
        
        return(
            <div className="">
                <div onClick={this.pause}>
                   <ReactPlayer url='https://youtu.be/1s2ZYjwlRZA' playing={this.state.videoPlay} onPause={this.pause} loop={true} className={!this.state.videoPlay ? "video-play-part-you" : ""} width="100%" height={700}/>
              
                </div>     
             {!this.state.videoPlay && (
                 <div className={best_phone_part}>
                    <div className={best_inner}>
                        <div className={text}>
                            <p>Advanced YouTube Integration</p>
                            <div className={description}>
                            TechSpecs is deeply integrated with YouTube and uses staggered AI to reveal the standardized tech specs of gadgets and electronics featured in video reviews.
                            </div>                     
                        </div>                
                    </div>    
                    <div className={watch_text}>
                        <button style={{width: '100px', height: '100px'}} className={video_play2} onClick={this.play}>   
                        </button>
                        <span className={span_text}>Watch Video</span>
                    </div>
    
                </div>
             )}

                
            </div>
        )
    }
  
}
export default YouTubeVideo