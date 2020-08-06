import React, {Component } from 'react';
import { Document, Page } from 'react-pdf';
import { Grid, Cell } from 'react-mdl';
import { pdfjs } from 'react-pdf';
import pdfFile from './resume.pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Education extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <p>{this.props.startYear} - {this.props.endYear}</p>
          </Cell>
          <Cell col={8}>
            <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
            <p>{this.props.schoolDescription}</p>
          </Cell>
        </Grid>
        <Document file={pdfFile}></Document>
      </div>
    )
  }
}

export default Education;