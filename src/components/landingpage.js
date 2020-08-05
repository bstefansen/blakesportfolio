import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkdokSVm6ytjniDQmDx1sVmRiMsgoWyqcIdw&usqp=CAU"
              alt="avatar"
              className="avatar-img"
            />
            {/*TODO <div>*Light Bar</div>*/}
            <div className="banner-text">
              <h1>Jr Software Developer</h1>

              <hr/>

              <p>Python • JavaScript • HTML/CSS • Bootstrap • React • NodeJS • Express • MongoDB • SQL • GIS</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;