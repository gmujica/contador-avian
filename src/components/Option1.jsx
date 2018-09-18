import React, { Component, Fragment } from 'react'
import  Grid from '@material-ui/core/Grid'


export class Option1 extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Fragment>
      <Grid container style={{padding: 50}}>
        <Grid item  xs={3}>
          <img src={require('../img/8.png')} width="200" height="200" alt="logo"/>
        </Grid>
        <Grid item  xs={3}>
          <img src={require('../img/7.png')} width="200" height="200" alt="logo"/>
        </Grid>
        <Grid item  xs={3}>
          <img src={require('../img/6.png')} width="200" height="200" alt="logo"/>
        </Grid>
        <Grid item  xs={3}>
          <img src={require('../img/5.png')} width="200" height="200" alt="logo"/>
        </Grid>
      </Grid>
      </Fragment>
    );
  }
}

export default Option1
