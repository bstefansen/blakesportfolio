import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return(
      <div>
        <br/><br/>
        <form id="contact-form" method="POST" action="https://formspree.io/mzbjoyew">
          <div id="name-email">
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Your email" required />
          </div>
          <textarea id="text-area" name="message" placeholder="Your message" rows="3" style={{resize: "none"}} required></textarea>
          <input id="contact-form-button" type="submit" />
        </form>
      </div>
      
    )
  }
}

export default Contact;