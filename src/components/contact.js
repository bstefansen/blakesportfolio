import React, { Component } from 'react';
import { Grid, Cell, Textfield, Button, ProgressBar } from 'react-mdl';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: "",
      submit: ""
    }
    this.changeEmail = this.changeEmail.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  changeMessage(e) {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit() {
    this.setState({
      email: "",
      message: "",
      submit: "Thank you! We will be in contact momentarily"
    })
  }

  render() {
    return(
      <div className="contact-form">
        <h2 style={{fontFamily: "Lobster"}}>Leave a message</h2>

        <form 
          action="https://formspree.io/xpzybelv" 
          method="POST"
          >
          <Textfield
            label="*Your email..."
            style={{width: '100%'}}
            name="email"
            type="email"
            required
          />
          <br/>
          <Textfield
            label="Your message..."
            style={{width: '100%'}}
            rows={2}
            resize="none"
            name="message"
            type="text"
          />
          <br/>
          <Button type="submit" raised colored ripple onClick={this.handleSubmit}>Submit</Button>
        </form>
      </div>
      
    )
  }
}

export default Contact;