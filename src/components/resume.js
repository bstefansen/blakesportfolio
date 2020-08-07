import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import pdfFile from './resume.pdf';
import Education from './education';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid className="resume-grid">
          <Cell className="resume-left-col" col={4}>
            <div style={{textAlign: 'center'}}>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkdokSVm6ytjniDQmDx1sVmRiMsgoWyqcIdw&usqp=CAU"
                alt="avatar"
                className="avatar-img"
                style={{border: "5px solid #27221f"}}
              />
            </div>

            <h2 style={{paddingTop: '1em'}}>Blake Stefansen</h2>
            <h4 style={{color: 'grey'}}>Jr Software Developer</h4>
            <hr style={{borderTop: '3px solid #27221f', width: '80%', margin: "auto", marginBottom: "1em"}} />
            <p >I'm a recent University of Florida Cum Laude Geoscience Graduate with a passion for technology and the natural world</p>
            <hr style={{borderTop: '3px solid #27221f', width: '50%', margin: "auto", marginBottom: "1em"}} />
            <h5>Resume</h5>
            <a href={pdfFile} rel="noopener noreferreer" target="_blank">PDF Version</a>
            <hr style={{borderTop: '3px solid #27221f', width: '50%', margin: "auto", marginBottom: "1em", marginTop: "2em"}} />
          </Cell>
          <Cell className="resume-right-col" col={8}>

            <Education />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;