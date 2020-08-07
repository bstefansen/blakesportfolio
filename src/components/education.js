import React, { Component, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Grid, Cell, Button } from 'react-mdl';
import pdfFile from './resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      numPages: 2
    }
    this.updatePageOne = this.updatePageOne.bind(this);
    this.updatePageTwo = this.updatePageTwo.bind(this);
  }

  updatePageOne() {
    this.setState({
      page: 1
    })
  }

  updatePageTwo() {
    this.setState({
      page: 2
    })
  }

  render() {
    return(
      <div>
        <Grid style={{textAlign: "center", width: "50%"}}>
          <Cell col={4}>
            <Button raised ripple style={{backgroundColor: "white"}} onClick={this.updatePageOne}>
              <i className="fa fa-arrow-left" aria-hidden="true" />
            </Button>
          </Cell>
          <Cell col={4}>
            <p>{this.state.page} of {this.state.numPages}</p>
          </Cell>
          <Cell col={4}>
            <Button raised ripple style={{backgroundColor: "white"}} onClick={this.updatePageTwo}>
              <i className="fa fa-arrow-right" aria-hidden="true" />
            </Button>
          </Cell>
        </Grid>
        <Document 
          file={pdfFile}
        >
          <Page pageNumber={this.state.page}/>
        </Document>
      </div>
    )
  }
}

export default Education;