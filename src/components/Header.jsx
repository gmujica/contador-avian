import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Header(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <AppBar position="static  " color="primary" style={{background: "#08253C"}}>
            <Toolbar>
              <Grid item xs={6} style={{padding: 10}}>
                <img src={require('../img/AT.png')} width="250" height="100" alt="logo"/>
              </Grid>
              <Grid item xs={6} align="center" style={{padding: 10}}>
                <Typography variant="display2" gutterBottom color="inherit">
                   Pronto Venimos
                </Typography>
                <Typography variant="Headline" gutterBottom color="inherit">
                   Con nuestras sorpresas para ti!
                </Typography>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>

      </Grid>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header)
