import React, { Component } from 'react'
import {ReactTitle} from 'react-meta-tags';
import Header from '../header'
import {
  terms_header,
  terms_hdr,
  terms_container,
  contactpart,
  terms_inner,
  terms_title,
  terms_contentStyle,
  terms_subcontent,
  terms_sevice,
  terms_medium_service,
  terms_first_content,
  terms_medium_service_padding,
  terms_ul_service,
  terms_medium_service_top,
  terms_sevice_bottom,
  terms_second_content

} from './styles/termsOfUse.module.scss'
import {
  terms_content,
  terms_ul_contents,
  terms_ul_agree_contents,
  terms_IV_opinions,
  terms_V_post_contents,
  terms_V_assume_contents,
  terms_VII_copyright_contents,
  terms_VII_believe_contents,
  terms_VII_counter_contents,
  terms_VIII_contents,
  terms_IX_contents
} from 'utils/metaData'
import { text, description } from './styles/termsinner.module.scss'
import Footer from 'components/footer'

class ContactUs extends Component {

  constructor(props) {
    super(props)

    this.state = {

      center: {
        lat: 47.610378,
        lng: -122.200676
      },
      zoom: 15
    }
  }

  goToprivacy =() =>{

  }

  render() {

    return (
      <div className={contactpart}>
          <ReactTitle title="Terms | TechSpecs"/>
        <Header
          headerClass={terms_header} hdrClass={terms_hdr} />
        <div className={terms_container}>
          <div className={terms_inner}>
            <div className={terms_title}>
              <div className={text}>
                <p>TechSpecs Terms of use</p>
              </div>
            </div>
            <div className={terms_contentStyle}>
              <p className={terms_first_content}>These Terms of Use (these “Terms”) apply when you access or use this Service. For purposes of these Terms, “Company” refers to TechSpecs, Inc. “Service” refers to the Company’s service, which can be accessed via our website located at <a href="/"><span>techspecs.io</span></a> or by accessing the service through clicking on our application (the “App”) on your mobile device. The terms “we,” “us,” and “our” refer to the Company. “You” refers to you, as a user of the Service.</p>
              <p style={{ letterSpacing: 1.1 }}>{terms_content[1]}</p>
              <div className={terms_subcontent}>
                <p className={terms_sevice}>I. ABOUT THE SERVICE</p>
                <p className={terms_medium_service}>The Service allows you to share photos and step-by-step guides with the world in a very fast and fun way.</p>
                <p className={terms_sevice}>II. PRIVACY POLICY OF THE SERVICE</p>
                <p className={terms_medium_service}>The Company is committed to protecting the privacy of its users. Please refer to our Privacy Policy (found here: <a href="/privacy"><span>techspecs.io/privacy</span></a>), which explains how we collect, use, and protect the information that you provide to us. By agreeing to these Terms, you also agree to our Privacy Policy.</p>
                <p className={terms_sevice}>III. REGISTRATION TO USE THE SERVICE</p>
                <p className={terms_medium_service}>In order to access certain features of this Service, you must create an account and provide certain information about yourself. You must be at least 13 years old to create an account. By creating account, you represent and warrant that: all information you submit is truthful and accurate, is not fictitious and does not impersonate another person, and that you will maintain the accuracy of such information. You are fully responsible for all activities that occur under your account. You may delete your account at any time, for any reason, by following the instructions on the Service.</p>
                <p className={terms_medium_service}>You will create a unique username and password to access your account with the Service. You are responsible for maintaining the confidentiality of this login information. You agree to notify us immediately of any unauthorized use, or suspected unauthorized use, of your account or any other breach of security. We are not liable for any loss or damage arising from unauthorized use of your account.</p>
                <p className={terms_sevice}>IV. CONDITIONS OF USE OF THE SERVICE</p>
                <p className={terms_medium_service_padding}>We grant you a non-transferable, non-exclusive, revocable, limited license to use and access our Service solely for your own personal, noncommercial use. This right is subject to the following terms:</p>
                 <ul>
                   {
                     terms_ul_contents.map((item,index) =>{
                       return(
                        <li>
                     <p className={terms_ul_service}>{item}</p>
                        </li>
                       )
                     })
                   }
                 </ul>

                 <p className={terms_medium_service_top}>You agree that you will not do, or attempt to do, any of the following when using the Service, under any circumstances:</p>
                 <ul>
                   {
                     terms_ul_agree_contents.map((item,index) =>{
                       return(
                        <li>
                          <p className={terms_ul_service}>{item}</p>
                        </li>
                       )
                     })
                   }
                 </ul>
                  
                  {
                    terms_IV_opinions.map((opinion_item,index) =>{

                       return(
                        <p className={terms_medium_service_top}>{opinion_item}</p>
                        
                       )
                    })

                  }
                  <p className={terms_sevice_bottom}>V. POSTING CONTENT TO THE SERVICE</p>
                  <p className={terms_medium_service_top}>By creating an account, you are able to post text, images, and other content to the Service (“User Content”). You are solely responsible for the User Content that you post, upload, link to or otherwise make available to the Service, and you agree that such content does not violate any of these Terms.</p>
                  <p className={terms_medium_service_top}>By posting any User Content to the Service, you expressly grant, and you represent and warrant that you have the right to grant, to us an irrevocable, nonexclusive, sublicensable, transferable, perpetual, royalty-free and fully paid, worldwide license to reproduce, distribute, publicly display and perform, prepare derivative works of, incorporate into other works, and otherwise use your User Content, and to grant sublicenses of these rights, solely for the purposes of including your User Content in the Service. You hereby irrevocably waive any claims and assertions of moral rights or attribution with respect to your User Content.</p>
                
                  <p className={terms_medium_service_top}>When posting any User Content while using the Service, you agree to the following:</p>
                 <ul>
                   {
                     terms_V_post_contents.map((item,index) =>{
                       return(
                        <li>
                          <p className={terms_ul_service}>{item}</p>
                        </li>
                       )
                     })
                   }
                 </ul>
                  
                  {
                    terms_V_assume_contents.map((opinion_item,index) =>{

                       return(
                        <p className={terms_medium_service_top}>{opinion_item}</p>
                       )
                    })

                  }
                   <p className={terms_sevice_bottom}>VI. THIRD PARTY LINKS AND MATERIALS ON THE SERVICE</p>
                   <p className={terms_medium_service_top}>Our Service may contain links to third-party websites and services, display advertisements for third parties, and/or content or other items belonging to or originating from third parties (collectively, “Third-Party Content”). Such Third-Party Content is not under our control, and we are not responsible for any Third-Party Content. We provide access to this Third-Party Content only as a convenience to you, and do not review, approve, monitor, endorse, warrant, or make any representations with respect to such Third-Party Content. You use all Third-Party Content at your own risk, and should apply a suitable level of caution and discretion in doing so. When you click on any of the Third-Party Content, the applicable third party’s terms and policies apply, including the third party’s privacy and data gathering practices. You should review the applicable terms and policies, including privacy and data gathering practices, of any site to which you navigate from the Site or relating to any applications you use or install from the site.</p>
                   <p className={terms_sevice_bottom}>VII. COPYRIGHT POLICY OF THE SERVICE</p>
                   <p className={terms_medium_service_top}>We respect intellectual property. Pursuant to 17 U.S.C. § 512(i), we have adopted and implemented a policy that provides for removal from our Service of any materials infringing on the copyright of another person and for the termination, in appropriate circumstances, of users of our Service who repeatedly infringe on the copyrights of others.</p>
                   <p className={terms_medium_service_top}>If you are a copyright owner, or an agent thereof, and believe that one of our users is, through the use of our Service, unlawfully infringing upon your copyright(s), you may, pursuant to the Digital Millennium Copyright Act, 17 U.S.C. § 512(c), submit a written notification to our designated Copyright Agent that includes:</p>
                   <ul>
                   {
                     terms_VII_copyright_contents.map((item,index) =>{
                       return(
                        <li>
                          <p className={terms_ul_service}>{item}</p>
                        </li>
                       )
                     })
                   }
                 </ul>
                 <p className={terms_medium_service_top}>If you believe that your User Content that has been removed from the Service is not infringing, that you have authorization from the copyright owner or his or her agent to post the content, or is otherwise permissible to use under the law, you may send a counter-notice containing the following information to our Copyright Agent:</p>
                 <ul>
                   {
                     terms_VII_believe_contents.map((item,index) =>{
                       return(
                        <li>
                          <p className={terms_ul_service}>{item}</p>
                        </li>
                       )
                     })
                   }
                 </ul>

                 <ul>
                   {
                     terms_VII_counter_contents.map((item,index) =>{
                       return(
                        <li>
                          <p className={terms_medium_service_top}>{item}</p>
                        </li>
                       )
                     })
                   }
                 </ul>
                 <p className={terms_sevice_bottom}>VI. THIRD PARTY LINKS AND MATERIALS ON THE SERVICE</p>
                 {
                   terms_VIII_contents.map((item,index) =>{
                     return(
                      <p className={terms_second_content}>{item}</p>
                     )
                   
                   })
                 }

               <p className={terms_medium_service_top}>If your jurisdiction does not allow the exclusion of implied warranties, the above such exclusion may not apply to you. If your jurisdiction does not allow limitations on how long an implied warranty lasts, the above such limitation may not apply to you. If your jurisdiction does not allow the limitation or exclusion of liability for incidental or consequential damages, the above such limitations or exclusions may not apply to you.</p>
               <p className={terms_sevice_bottom}>IX. GENERAL TERMS OF THE SERVICE</p>
                 {
                   terms_IX_contents.map((item,index) =>{
                     return(
                      <p className={terms_medium_service_top}>{item}</p>
                     )
                   
                   })
                 }
                  <p className={terms_second_content}>IF YOU ARE A CALIFORNIA RESIDENT, YOU HEREBY WAIVE CALIFORNIA CIVIL CODE SECTION 1542 IN CONNECTION WITH THE FOREGOING, WHICH STATES: “A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR.”</p>
                  <p className={terms_medium_service_top}>Communications made through the Service will not constitute legal notice to us or any of our officers, employees, agents, or representatives in any situation where notice to us is required by contract or any law or regulation.</p>
                  <p className={terms_medium_service_top}>These Terms constitute the entire agreement between you and us regarding the use of the Service. If any part of these Terms are held invalid or unenforceable, that portion of these Terms will be construed consistent with applicable law. The remaining portions will remain in full force and effect. Any failure by us to enforce any provision of these Terms will not be considered a waiver of our right to enforce such provision. The section titles in these Terms are for convenience only and have no legal or contractual effect. The word “including” means “including without limitation.” Our rights under these Terms shall survive any termination of these Terms. Any cause of action related to or arising out of your relationship with us or the Service must commence within ONE year after the cause of action accrues, otherwise such cause of action is permanently barred. These Terms and your use of the Service are governed by the laws of the United States of America and the laws of the State of California, without regard to conflict of law provisions.</p>
                  <p className={terms_second_content}>YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF USE, UNDERSTAND THE TERMS OF USE, AND WILL BE BOUND BY THESE TERMS AND CONDITIONS. YOU FURTHER ACKNOWLEDGE THAT THESE TERMS OF USE TOGETHER WITH THE PRIVACY POLICY AT <a href="/privacy"><span>WWW.TECHSPECS.IO/PRIVACY</span></a> REPRESENT THE COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT BETWEEN US AND THAT IT SUPERSEDES ANY PROPOSAL OR PRIOR AGREEMENT ORAL OR WRITTEN, AND ANY OTHER COMMUNICATIONS BETWEEN US RELATING TO THE SUBJECT MATTER OF THIS AGREEMENT.</p>
                  <p className={terms_medium_service_top}>Copyright © 2018 TechSpecs, Inc. All rights reserved. All trademarks, logos and service marks displayed on the Site are our property or the property of other third parties. You are not permitted to use these marks without our prior written consent or the consent of such third party which may own the marks.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default ContactUs