import React from 'react'
import { text, description } from './styles/contactinner.module.scss'
const ContactInner = () => {
  return (

    <div className={text}>
      <p> Contact Us</p>
      <div className={description}>
        Got questions, bug reports, feedback or feature requests? We'd love to hear from you.
        </div>
    </div>
  )
}
export default ContactInner