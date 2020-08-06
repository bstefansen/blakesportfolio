import React, { Component } from 'react';
import { Grid, Cell, Textfield, Button } from 'react-mdl';

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
        <h2 style={{fontWeight: "bold", marginBottom: "2em"}}>Leave a message</h2>
        <Textfield
          onChange={this.changeEmail}
          value={this.state.email}
          label="Your email..."
          style={{width: '100%'}}
        />
        <br/>
        <Textfield
          onChange={this.changeMessage}
          value={this.state.message}
          label="Your message..."
          style={{width: '100%'}}
        />
        <br/>
        <Button raised colored ripple onClick={this.handleSubmit}>Button</Button>
        <br/><br/>
        <div style={{fontWeight: "bold"}}>
          {this.state.submit}
        </div>
      </div>
      
    )
  }
}

export default Contact;