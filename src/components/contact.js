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
    this.submitForm = this.submitForm.bind(this);
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

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    return(
      <div className="contact-form">
        <h2 style={{fontWeight: "bold", marginBottom: "2em"}}>Leave a message</h2>
        <form 
          action="https://formspree.io/xpzybelv" 
          method="POST"
          >
          <Textfield
            label="Your email..."
            style={{width: '100%'}}
            name="email"
            type="email"
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