import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
  render() {
    return(
      <div>
        <br/>

        <div className="projects-grid">
          {/* GraphQL Library */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://bstefansen.github.io/Portfolio/images/GraphQL-Library3.JPG) top / cover'}}></CardTitle>
            <CardText>
              A MERN full-stack web app simulating a library database using GraphQL & Apollo
            </CardText>
            <CardActions border className="card-buttons">
                <Button colored href="https://github.com/bstefansen/graphql-library" rel="noopener noreferreer" target="_blank">GitHub</Button>
                <Button colored href="https://stefansen-graphql-library.herokuapp.com/" rel="noopener noreferreer" target="_blank">Live Demo</Button>
            </CardActions>
          </Card>

          {/* WordPress Blog */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://bstefansen.github.io/Portfolio/images/getsufficient.JPG) top / cover'}}></CardTitle>
            <CardText>
              An online media WordPress blog about self-sufficiency and sustainability
            </CardText>
            <CardActions border className="card-buttons">
                <Button colored href="https://github.com/bstefansen/getsufficient" rel="noopener noreferreer" target="_blank">GitHub</Button>
                <Button colored href="https://getsufficient.com/" rel="noopener noreferreer" target="_blank">Live Demo</Button>
            </CardActions>
          </Card>

          {/* Choropleth Map */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://bstefansen.github.io/Portfolio/images/choropleth.JPG) top / cover'}}></CardTitle>
            <CardText>
              A choropleth web app of the United States using D3.js
            </CardText>
            <CardActions border className="card-buttons">
                <Button colored href="https://github.com/bstefansen/getsufficient" rel="noopener noreferreer" target="_blank">GitHub</Button>
                <Button colored href="https://getsufficient.com/" rel="noopener noreferreer" target="_blank">Live Demo</Button>
            </CardActions>
          </Card>

          {/* Python Sea Level Predictor */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://bstefansen.github.io/Portfolio/images/sea_level_plot.png) top / cover'}}></CardTitle>
            <CardText>
              A Python app that calculates sea level predictions from a given dataset
            </CardText>
            <CardActions border className="card-buttons">
                <Button colored href="https://github.com/bstefansen/sea-level-predictor" rel="noopener noreferreer" target="_blank">GitHub</Button>
                <Button colored href="https://github.com/bstefansen/sea-level-predictor/blob/master/sea_level_plot.png" rel="noopener noreferreer" target="_blank">Live Demo</Button>
            </CardActions>
          </Card>

          {/* Florida Web App */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <CardTitle style={{color: 'white', height: '176px', background: 'url(https://bstefansen.github.io/Portfolio/images/floridaWebApp.JPG) top / cover'}}></CardTitle>
            <CardText>
              An Esri web map showcasing Florida's state parks and sinkholes
            </CardText>
            <CardActions border className="card-buttons">
                <Button colored href="https://arcg.is/0CuyuD" rel="noopener noreferreer" target="_blank">GitHub</Button>
                <Button colored href="https://bstefansen.maps.arcgis.com/apps/webappviewer/index.html?id=a9b83f7e0f58477dad836126c6c43ae5" rel="noopener noreferreer" target="_blank">Live Demo</Button>
            </CardActions>
          </Card>

          {/* Weather App */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://bstefansen.github.io/Portfolio/images/weather.JPG) top / cover'}}></CardTitle>
            <CardText>
              A web app that fetches API weather data from the user's current location
            </CardText>
            <CardActions border className="card-buttons">
                <Button colored href="https://github.com/bstefansen/weather-app" rel="noopener noreferreer" target="_blank">GitHub</Button>
                <Button colored href="https://bstefansen.github.io/weather-app/" rel="noopener noreferreer" target="_blank">Live Demo</Button>
            </CardActions>
          </Card>

          {/* GIS Portfolio */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://bstefansen.github.io/Portfolio/images/gis.JPG) top / cover'}}></CardTitle>
            <CardText>
              A collection of my 2019 summer semester GIS projects at university
            </CardText>
            <CardActions border className="card-buttons">
                <Button colored href="https://github.com/GIS-Portfolio" rel="noopener noreferreer" target="_blank">GitHub</Button>
                <Button colored href="https://drive.google.com/file/d/1EE_NjqTQosZrRRbuuTO65hPTdxruzQIj/view" rel="noopener noreferreer" target="_blank">Live Demo</Button>
            </CardActions>
          </Card>

          {/* Zonal Stats Calculator */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://bstefansen.github.io/Portfolio/images/zonestat.JPG) top / cover'}}></CardTitle>
            <CardText>
              An ArcPy script that calculates zonal statitsics for multiple raster files
            </CardText>
            <CardActions border className="card-buttons">
                <Button colored href="https://github.com/bstefansen/ZonalStatisticsCalculator" rel="noopener noreferreer" target="_blank">GitHub</Button>
                <Button colored href="https://docs.google.com/presentation/d/1-ZbuHjjaAfntVAjgFVXOMoflJz-GJLPOgdreMDI8mX0/edit?usp=sharing" rel="noopener noreferreer" target="_blank">Live Demo</Button>
            </CardActions>
          </Card>

          {/* Pomodoro Clock */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://bstefansen.github.io/Portfolio/images/pomodoroClockPic.JPG) top / cover'}}></CardTitle>
            <CardText>
              A web app simulating a pomodoro clock built on React
            </CardText>
            <CardActions border className="card-buttons">
                <Button colored href="https://github.com/bstefansen/PomodoroClock" rel="noopener noreferreer" target="_blank">GitHub</Button>
                <Button colored href="https://bstefansen.github.io/PomodoroClock/" rel="noopener noreferreer" target="_blank">Live Demo</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    
    )
  }
}

export default Projects;