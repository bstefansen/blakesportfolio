import React, { Component } from 'react';
import { Grid, Cell, Icon } from 'react-mdl';
import pdfFile from './resume.pdf';
import Education from './education';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnLeft: 4,
      columnRight: 8,
      resumeScale: 1
    }
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    if (window.innerWidth <= 1050) {
      this.setState({
        columnLeft: 12,
        columnRight: 12,
        resumeScale: 0.6
      });
    } else {
      this.setState({
        columnLeft: 4,
        columnRight: 8,
        resumeScale: 1
      });
    }
  }

  handleResize() {
    if (window.innerWidth <= 1050) {
      this.setState({
        columnLeft: 12,
        columnRight: 12,
        resumeScale: 0.6
      });
    } else {
      this.setState({
        columnLeft: 4,
        columnRight: 8,
        resumeScale: 1
      });
    }
  }

  render() {

    window.addEventListener('resize', this.handleResize);

    return(
      <div>
        <Grid className="resume-grid">
          <Cell className="resume-left-col" col={this.state.columnLeft}>
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

            <p >I'm a recent University of Florida cum laude geoscience graduate with demonstrated experience in GIS and software development</p>

            <hr style={{borderTop: '3px solid #27221f', width: '50%', margin: "auto", marginBottom: "1em"}} />

            <h5>Resume PDF</h5>
          
            <a href={pdfFile} rel="noopener noreferreer" target="_blank">
              <Icon name="print" style={{color: "black"}} />
            </a>

            <hr style={{borderTop: '3px solid #27221f', width: '50%', margin: "auto", marginBottom: "1em", marginTop: "2em"}} />
          </Cell>
          <Cell className="resume-right-col" col={this.state.columnRight}>

            <Education scaleNum={this.state.resumeScale} />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;