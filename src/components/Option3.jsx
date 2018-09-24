import React, {
  Component,
  Fragment
} from 'react'
import  {
  Grid,
  Typography
} from '@material-ui/core/'


export class Option3 extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Fragment>
      <Grid container style={{padding: 50}}>
        <Grid item  xs={3} align="center">
          <img src={require('../img/15.png')} width="200" height="200" alt="logo"/>
          <Typography variant="title" gutterBottom>
            Asistencia al pasajero
          </Typography>
        </Grid>
        <Grid item  xs={3} align="center">
          <img src={require('../img/12.png')} width="200" height="200" alt="logo"/>
          <Typography variant="title" gutterBottom>
            Seguros de viajes
          </Typography>
        </Grid>
        <Grid item  xs={3} align="center">
          <img src={require('../img/13.png')} width="200" height="200" alt="logo"/>
          <Typography variant="title" gutterBottom>
            Gestion de visa
          </Typography>
        </Grid>
        <Grid item  xs={3} align="center">
          <img src={require('../img/14.png')} width="200" height="200" alt="logo"/>
          <Typography variant="title" gutterBottom>
            Vuelos
          </Typography>
        </Grid>
      </Grid>
      </Fragment>
    );
  }
}

export default Option3
