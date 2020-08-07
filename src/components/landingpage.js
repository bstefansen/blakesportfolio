import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';
import pdfFile from './resume.pdf';

class Landing extends Component {
  render() {
    return(
      <div className="landing-div">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkdokSVm6ytjniDQmDx1sVmRiMsgoWyqcIdw&usqp=CAU"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Jr Software Developer</h1>

              <div className="color-bar" style={{marginBottom: "1em"}}></div>

              <p>Python • JavaScript • HTML/CSS • Bootstrap • React • NodeJS • Express • MongoDB • SQL • GIS • Azure</p>

              <div className="social-links">
                {/* Linkedin */}
                <a href="https://www.linkedin.com/in/blake-stefansen/" rel="noopener noreferreer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Email */}
                <a href="mailto:bstefansen11@gmail.com" rel="noopener noreferreer" target="_blank">
                  <i className="fa fa-envelope-square" aria-hidden="true" />
                </a>

                {/* GitHub */}
                <a href="https://github.com/bstefansen" rel="noopener noreferreer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Resume */}
                <a href={pdfFile} rel="noopener noreferreer" target="_blank">
                  <i className="fa fa-pencil-square-o" aria-hidden="true" />
                </a>
                
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;