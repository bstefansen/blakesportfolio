import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import pdfFile from './resume.pdf';
import Education from './education';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkdokSVm6ytjniDQmDx1sVmRiMsgoWyqcIdw&usqp=CAU"
                alt="avatar"
                className="avatar-img"
                style={{border: "5px solid #27221f"}}
              />
            </div>

            <h2 style={{paddingTop: '1em'}}>Blake Stefansen</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #27221f', width: '50%'}} />
            <p>I'm a recent University of Florida Cum Laude Geoscience Graduate with a passion for technology and the natural world</p>
            <hr style={{borderTop: '3px solid #27221f', width: '50%'}} />
            <h5>Email</h5>
            <p>bstefansen11@gmail.com</p>
            <h5>Linkedin</h5>
            <a href="https://www.linkedin.com/in/blake-stefansen/" rel="noopener noreferreer" target="_blank">linkedin.com/in/blake-stefansen/</a>
            <h5>Github</h5>
            <a href="https://github.com/bstefansen" rel="noopener noreferreer" target="_blank">github.com/bstefansen</a>
            <h5>Resume</h5>
            <a href={pdfFile} rel="noopener noreferreer" target="_blank">PDF Version</a>
            <hr style={{borderTop: '3px solid #27221f', width: '50%'}} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education 
              startYear={2018}
              endYear={2020}
              schoolName='University of Florida'
              schoolDescription="Bachelor's in Geology | Honors: Cum Laude"
            />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;