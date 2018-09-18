import React, { Component, Fragment } from 'react'
import  Grid from '@material-ui/core/Grid'


export class Option3 extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Fragment>
      <Grid container style={{padding: 50}}>
        <Grid item  xs={3}>
          <img src={require('../img/15.png')} width="200" height="200" alt="logo"/>
        </Grid>
        <Grid item  xs={3}>
          <img src={require('../img/12.png')} width="200" height="200" alt="logo"/>
        </Grid>
        <Grid item  xs={3}>
          <img src={require('../img/13.png')} width="200" height="200" alt="logo"/>
        </Grid>
        <Grid item  xs={3}>
          <img src={require('../img/14.png')} width="200" height="200" alt="logo"/>
        </Grid>
      </Grid>
      </Fragment>
    );
  }
}

export default Option3
