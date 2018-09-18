import React, { Component, Fragment } from 'react'
import  Grid from '@material-ui/core/Grid'


export class Option4 extends Component { 
  render() {
    return (
      <Fragment>
      <Grid container style={{padding: 50}}>
        <Grid item  xs={3}>
          <img src={require('../img/15.png')} width="200" height="200" alt="logo"/>
        </Grid>
      </Grid>
      </Fragment>
    );
  }
}

export default Option4
