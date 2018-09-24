import React, {
  Component,
  Fragment
} from 'react'
import  {
  Grid,
  Typography
} from '@material-ui/core/'

export class Option1 extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Fragment>
      <Grid container style={{padding: 50}}>
        <Grid item  xs={3} align="center">
          <img src={require('../img/3.png')} width="200" height="200" alt="logo"/>
          <Typography variant="title" gutterBottom>
            Alojamiento
          </Typography>
        </Grid>
        <Grid item  xs={3} align="center">
          <img src={require('../img/4.png')} width="200" height="200" alt="logo"/>
          <Typography variant="title" gutterBottom>
            Concierge
          </Typography>
        </Grid>
        <Grid item  xs={3} align="center">
          <img src={require('../img/9.png')} width="200" height="200" alt="logo"/>
          <Typography variant="title" gutterBottom>
            Traslado terrestre
          </Typography>
        </Grid>
        <Grid item  xs={3} align="center">
          <img src={require('../img/11.png')} width="200" height="200" alt="logo"/>
          <Typography variant="title" gutterBottom>
            Traslado maritimo
          </Typography>
        </Grid>
      </Grid>
      </Fragment>
    );
  }
}

export default Option1
