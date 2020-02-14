import React, { Component } from 'react'
import fetch from 'cross-fetch'
import axios from 'axios';
import '../contactus/styles/information.scss'
import * as EmailValidator from 'email-validator'

class SendMessage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      'email': "",
      'message': '',
      'sucess_message': '',
      'check': false,
      'mailCheck':false,
      'firstCheck':false,
    }

  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value})
    
  if(this.state.email === ""){
      this.setState({mailCheck:false});
     }
  else{
    if(EmailValidator.validate(this.state.email))
    {

        this.setState({mailCheck:true});
    }
    else{
        this.setState({mailCheck:false});
    
    }
  }

  }

  checkValid = (e) => {
    if (e.target.name === 'email') {
        if (EmailValidator.validate(e.target.value)) {
            this.setState({email:e.target.value, mailCheck: true })
        } else {
            this.setState({ mailCheck: false })
        }
    }
}

  sendMessage = () => {
    if (this.state.email !== '' && this.state.message !== '') {
      const data = {
        'email': this.state.email,
        'message': this.state.message
      }

      axios.post('https://admin.techspecs.io/api/contactUs', { data })
        .then(res => {
          if (!res.data.error) {
            this.setState({ check: true, sucess_message: res.data.message })
          }
          else {

          }
        })
    }
  }
  render() {

    return (
      <div className="sendpart">
        <div>
          <p>Enter your email address</p>     
            <input
              type="text" 
              name="email" 
              className={this.state.email ==="" || this.state.mailCheck?"input_email_address":"error_input_email_address"} 
              onChange={this.handleEmailChange.bind(this)}
              onKeyUp={this.checkValid}
               /> 
           {
             this.state.email ==="" || !this.state.mailCheck &&(
              <p className="error_message">Please include "@" and ".com" in the email adress.</p> 
             )
           }
                    
        </div>
        <div className="enter_message_part">
          <p>Enter your message</p>
          <div className="contact_message">
            <textarea className="message_send" onBlur={this.handleMessageChange.bind(this)}/>
          </div>

        </div>
        <button className="btn contact_send_button" onClick={this.sendMessage}>Send message</button>
        {
          this.state.check && (
            <p className="success_message">{this.state.sucess_message}</p>
          )

        }
      </div>
    )

  }

}

export default SendMessage