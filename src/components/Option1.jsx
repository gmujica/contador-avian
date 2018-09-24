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
          <img src={require('../img/8.png')} width="200" height="200" alt="logo"/>
          <Typography variant="title" gutterBottom >
            Cruceros
          </Typography>
        </Grid>
        <Grid item  xs={3} align="center">
          <img src={require('../img/7.png')} width="200" height="200" alt="logo"/>
          <Typography variant="title" gutterBottom>
          Eventos, grupos y convenciones
          </Typography>
        </Grid>
        <Grid item  xs={3} align="center">
          <img src={require('../img/6.png')} width="200" height="200" alt="logo"/>
          <Typography variant="title" gutterBottom>
            Actividades
          </Typography>
        </Grid>
        <Grid item  xs={3} align="center">
          <img src={require('../img/5.png')} width="200" height="200" alt="logo"/>
          <Typography variant="title" gutterBottom>
            Alquirer de vehiculo
          </Typography>
        </Grid>
      </Grid>
      </Fragment>
    );
  }
}

export default Option1
