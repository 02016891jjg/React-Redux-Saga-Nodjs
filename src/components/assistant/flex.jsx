import React from 'react'
import {flex_part,input,chrome_logo_size,button_try_now} from './styles/flex.module.scss'
import {CHROME_LOGO} from 'common/images'
import MailchimpSubscribe from "react-mailchimp-subscribe"
// abasic form
const { detect } = require('detect-browser');
const CustomMailChimp = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () =>
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });
      const browser = detect();
      return(
    <div>
      <div className={input}>
        <img src={CHROME_LOGO} className={chrome_logo_size}/>
        <input style={{border: "1px solid #91A8BF66",outline:"none"}} type="email" defaultValue="" placeholder={"Enter your email to add to "+browser.name}  ref={node => (email = node)}/>
      <div className={button_try_now} onClick={submit}>Add to {browser.name}</div>
      </div>
      {status === "sending" && <div style={{ color: "black" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "black" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
          </div>
     
      );
    };

class Flex extends React.Component{
    render(){
        const url =
        "https://googletechspecs.us4.list-manage.com/subscribe/post?u=11297c5d43c0f285dc141636a&amp;id=0990c4a295";
        return(
            <div className={flex_part}>
                <p>Flex the specs</p>
                <span>Download TechSpecs for free today and unlock the full power of automatic specs generation.</span>
                <div>
                
                <MailchimpSubscribe
                        url={url}
                        render={({ subscribe, status, message }) => (
                            <CustomMailChimp
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                            />
                        )}
                        />
                </div>         
            </div>
        )
    }
   
}
export default Flex