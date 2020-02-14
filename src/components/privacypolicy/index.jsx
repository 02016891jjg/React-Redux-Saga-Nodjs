import React, { Component } from 'react'
import {ReactTitle} from 'react-meta-tags';
import Header from '../header'
import {
  privacy_header,
  privacy_hdr,
  privacy_container,
  contactpart,
  privacy_inner,
  privacy_title,
  privacy_contentStyle,
  privacy_subcontent,
  privacy_sevice,
  privacy_medium_service,
  privacy_sevice_italy
} from './styles/privacy.module.scss'
import {
  privacy_content,
  privacy_contents,
  privacy_information_content,
  privacy_sub_informations,
  privacy_share_information,
  privacy_protect_information,
  privacy_regarging_information,
  privacy_protection_act,
  privacy_caloppa_contents,
  privacy_circumstances_contents,
  privacy_link_content,
  privacy_change_contents
} from 'utils/metaData'
import { text, description } from './styles/privacyinner.module.scss'
import Footer from 'components/footer'

class Privacy extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className={contactpart}>
        <ReactTitle title="Privacy | TechSpecs"/>
        <Header
          headerClass={privacy_header} hdrClass={privacy_hdr} />
        <div className={privacy_container}>
          <div className={privacy_inner}>
            <div className={privacy_title}>
              <div className={text}>
                <p>TECHSPECS PRIVACY POLICY</p>
              </div>
            </div>
            <div className={privacy_contentStyle}>

              {
                privacy_contents.map((item,index)=>{
                  return item !==""?( 
                  <p>{item}</p>
                  ):(
                    <p>For purposes of our Privacy Policy, “Service” refers to the Company’s service, which can be accessed via our website located at <a href="/"><span>https://techspecs.io </span></a> or by accessing the service through clicking on our application (the “App”) on your mobile device, and which allows users to share photos and step-by-step guides with the world in a very fast and fun way. The privacy “we,” “us,” and “our” refer to the Company. “You” refers to you, as a user of the Service.</p>
                  )
                })

              }
              <div className={privacy_subcontent}>
               <p className={privacy_sevice}>I. INFORMATION WE COLLECT</p>
               <p className={privacy_medium_service}>{privacy_information_content}</p>
                 {
                   privacy_sub_informations.map((item,index)=>{
                       
                    return(
                      <div>
                      <p className={privacy_sevice_italy}>{item.title}</p>
                      <p className={privacy_medium_service}>{item.description}</p>
                      </div>
                    )          
                   })
                 }
                  <p className={privacy_sevice}>II. HOW WE USE AND SHARE INFORMATION</p>
                  {
                   privacy_share_information.map((item,index)=>{
                       
                    return(
                      <div>
                      <p className={privacy_sevice_italy}>{item.title}</p>
                      <p className={privacy_medium_service}>{item.description}</p>
                      </div>
                    )          
                   })
                 }
                  <p className={privacy_sevice}>III. HOW WE PROTECT INFORMATION</p>
                  <p className={privacy_medium_service}>{privacy_protect_information}</p>
                  <p className={privacy_sevice}>IV. YOUR RIGHTS REGARDING THE USE OF YOUR PERSONAL INFORMATION</p>
                  <p className={privacy_medium_service}>{privacy_regarging_information}</p>
                  <p className={privacy_sevice}>V. YOUR DATA PROTECTION RIGHTS UNDER THE CALIFORNIA PRIVACY PROTECTION ACT (CALOPPA)</p>
                  <p className={privacy_medium_service}>{privacy_protection_act}</p>
                  <p className={privacy_medium_service}>According to CalOPPA we agree to the following:</p>
                   
                   {
                      privacy_caloppa_contents.map((item,index) =>{
                         
                         return(
                         <p className={privacy_medium_service}>{item}</p>
                         )

                      })
                   }
                <p className={privacy_medium_service}>Our Policy on “Do Not Track” Signals:</p>
                <p className={privacy_medium_service}>We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track browser mechanism is in place. Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.</p>
                <p className={privacy_medium_service}>You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.</p>
                <p className={privacy_sevice}>VI.	YOUR DATA PROTECTION RIGHTS UNDER GENERAL DATA PROTECTION REGULATION (GDPR)</p>
                <p className={privacy_medium_service}>If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR. – See more at https://eur-lex.europa.eu/eli/reg/2016/679/oj </p>
                <p className={privacy_medium_service}>We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>
                <p className={privacy_medium_service}>If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please email us at privacy@techspecs.io.</p>
                <p className={privacy_medium_service}>In certain circumstances, you have the following data protection rights:</p>

                 {
                   privacy_circumstances_contents.map((item,index) =>{
                     
                     return(
                     <p className={privacy_medium_service}>{item}</p>
                     )

                   })
                 }
                   <p className={privacy_medium_service}>Please note that we may ask you to verify your identity before responding to such requests. Please note, we may not able to provide Service without some necessary data.</p>
                   <p className={privacy_medium_service}>You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).</p>
                   <p className={privacy_sevice}>VII. LINKS TO OTHER WEBSITES</p>
                   <p className={privacy_medium_service}>{privacy_link_content}</p>
                   <p className={privacy_sevice}>VIII. CHANGES TO OUR PRIVACY POLICY</p>

                   {
                     privacy_change_contents.map((item,index) =>{

                       return(
                            <p className={privacy_medium_service}>{item}</p>

                       )
                     })
                   }

                  <p className={privacy_sevice}>IX. CONTACT US</p>
                  <p className={privacy_medium_service}>For questions regarding this Privacy Policy or how TechSpecs collects and uses data, please contact us by sending an email to <span>privacy@techspecs.io</span>.</p>
                  <p className={privacy_medium_service}><b>Last Updated:</b> This Privacy Policy was last updated on October 03, 2019.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Privacy