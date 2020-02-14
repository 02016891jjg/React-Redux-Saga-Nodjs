import React from 'react';
import Clappr from 'clappr'
var time1 = '';
class ClapprComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleview: false,
      urlvalidate: false,
      play: false
    }
    this.MouseEnter = this.MouseEnter.bind(this);
    this.MouseLeave = this.MouseLeave.bind(this);
    this.MouseMove = this.MouseMove.bind(this);
    this.VideoPlay = this.VideoPlay.bind(this);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   let changed = (nextProps.source !== this.props.source);
  //   if (changed) {
  //     this.change(nextProps.source);
  //   }
  //   return false;
  // }
  componentDidUpdate(prevProps, nextState) {
    let changed = (prevProps.source !== this.props.source);
    if (changed) {
      this.change(this.props.source);
    }
    return false;
  }
  
  componentDidMount() {
    this.change(this.props.source);
  }

  componentWillUnmount() {
    this.destroyPlayer();
  }
  
  destroyPlayer() {
    if (this.player) {
      this.player.destroy();
    }
    this.player = null;
  }

  change(source) {
    if (this.player) {
      this.destroyPlayer();
    }
    this.player = new Clappr.Player({
      parent: this.refs.player,
      source: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
      poster: require('../../assets/images/apple_phone_back.png'),
      width: 640,
      height: 403,
      playback: {
        hlsjsConfig: {
          enableWorker: false
        }
      },
      events: {
        onReady: function() {
          this.core.activePlayback.listenTo(
            this.core.activePlayback,
            Clappr.Events.PLAYBACK_ERROR,
            function(e) {
              console.log('playback_error', e);
              this.setState({urlvalidate: true})
            }.bind(this)
          );
        },
        onPlay: this.VideoPlay
      },
      autoPlay: false,
      poster: this.props.poster
    });
  }
  MouseEnter() {
    if(!this.state.urlvalidate && this.state.play) {
      this.setState({
        titleview: true
      });

      time1 = setTimeout(function() {
        this.setState({
          titleview: false
        });
      }.bind(this), 2000)
    }
  }
  MouseMove() {
    if(!this.state.urlvalidate && this.state.play) {
      this.setState({
        titleview: true
      });
      clearTimeout(time1);
      time1 = setTimeout(function() {
        this.setState({
          titleview: false
        });
      }.bind(this), 2000)
    }
  }
  MouseLeave() {
    this.setState({
      titleview: false
    });
    clearTimeout(time1);
  }
  VideoPlay() {
    this.setState({play: true});
    this.setState({
      titleview: true
    });
    time1 = setTimeout(function() {
      this.setState({
        titleview: false
      });
    }.bind(this), 2000)
  }
  render() {
    return (
      <div 
        style={{width: "100%", height: '100%', margin: 'auto', background: 'black'}}
        onMouseEnter={this.MouseEnter}
        onMouseLeave={this.MouseLeave}
        onMouseMove={this.MouseMove}
      >
        <p className={this.state.titleview ? "title-view" : "title-hidden"}>{this.props.title}</p>
        <div ref="player" style={{width: this.props.width, margin: 'auto'}}></div>
      </div>
    );
  }
}
export default ClapprComponent;