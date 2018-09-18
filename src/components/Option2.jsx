import React, { Component, Fragment } from 'react'
import  Grid from '@material-ui/core/Grid'


export class Option1 extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Fragment>
      <Grid container style={{padding: 50}}>
        <Grid item  xs={3}>
          <img src={require('../img/3.png')} width="200" height="200" alt="logo"/>
        </Grid>
        <Grid item  xs={3}>
          <img src={require('../img/4.png')} width="200" height="200" alt="logo"/>
        </Grid>
        <Grid item  xs={3}>
          <img src={require('../img/9.png')} width="200" height="200" alt="logo"/>
        </Grid>
        <Grid item  xs={3}>
          <img src={require('../img/11.png')} width="200" height="200" alt="logo"/>
        </Grid>
      </Grid>
      </Fragment>
    );
  }
}

export default Option1
