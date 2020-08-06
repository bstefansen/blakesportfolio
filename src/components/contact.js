import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div>
        <Grid className="contact-grid">
          <Cell col={12}>
            <h1>Contact</h1>
          </Cell>
        </Grid>
      </div>
      
    )
  }
}

export default Contact;