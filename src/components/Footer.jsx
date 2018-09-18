import React, { Component, Fragment } from 'react';
import {
  Paper,
  Grid,
  Typography
} from '@material-ui/core/'
import Phone from '@material-ui/icons/Phone'
import Email from '@material-ui/icons/Email'
import LocationOn from '@material-ui/icons/LocationOn'

export class Footer extends Component {
  render() {
    return (
      <Fragment>
          <Paper style={{background: 'Transparent'}}>
            <Grid container>
              <Grid item xs={9} style={{padding: 25}}>
                  <Typography
                   gutterBottom
                   variant="subheading" >
                     <Email />
                      Reservaciones@aviantravel.com.ve / Mpiazza@aviantravel.com.ve
                  </Typography>
                  <Typography
                   gutterBottom
                   variant="subheading">
                     <Phone />
                     (295)2630504 / (295)2645233 / +58 (295)2648816
                  </Typography>
                  <Typography
                   gutterBottom
                   variant="subheading">
                    <LocationOn />
                    Av. 4 De Mayo, Centro Comercial Galerias Fente. Local L-32, Estado Nueva Esparta
                  </Typography>
              </Grid>
              <Grid item xs={3}  aling="center" style={{padding: 25}}>
              <Typography variant="display1" gutterBottom color="primary">
                Por que la vida
              </Typography>
              <Typography variant="display1" gutterBottom color="primary">
                es un gran viaje
              </Typography>
              </Grid>
            </Grid>
          </Paper>
      </Fragment>
    );
  }
}

export default Footer
