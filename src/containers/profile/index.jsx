import React, { Component, } from 'react';
import Header from 'components/header';

import ProfileBreadCrum from 'components/profileBreadCrum/index.jsx';
import { breadCrumPorfileData } from 'utils/metaData';
import UserProfile from './component/SelectProfile';
import Blocks from './component/SelectBlocks';
import Temp from './component/SelectTemp';
import styles from './styles.module.scss';

const leftPanelString = [
  "Profile",
  "Apps",
  "Blocks",
  "Security",
];
class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectTag: 'Profile'
    }
  }

  selectSetting(item) {
    this.setState({ selectTag: item })
  }

  render() {
    return (
      <div className="wrapper">
        <div>
          <div style={{width:'100%',position:'fixed',zIndex:10000}}>
          <Header
            onFeedBackClick={this.onFeedBackClick}           
          />
          <ProfileBreadCrum breadCrumData={breadCrumPorfileData} />
          </div>
        
          <div className="container" style={{paddingTop:110}}>
            <div className={styles.vs_box}>
              <div className={styles.leftpanel}>
                {leftPanelString.map((item, key) => (
                  this.state.selectTag === item ?
                    (<div key={key} className={styles.selectpanel}>
                      <a className={styles.click} onClick={() => this.selectSetting(item)}>{item}</a>
                    </div>) :
                    (<div key={key} className={styles.unselectpanel}>
                      <a className={styles.click} onClick={() => this.selectSetting(item)}>{item}</a>
                    </div>)
                ))}
              </div>
              <div className={styles.vs_main}>
                {this.state.selectTag === "Profile" && <UserProfile />}
                {this.state.selectTag === "Apps" && <Temp />}
                {this.state.selectTag === "Blocks" && <Blocks />}
                {this.state.selectTag === "Security" && <Temp />}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Profile
