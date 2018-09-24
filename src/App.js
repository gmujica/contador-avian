import React, { Component, Fragment } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Countdown from './components/Countdown.jsx'
import Carrousel from './components/Carrousel.jsx'
import Grid from '@material-ui/core/Grid'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Grid container>
          <Grid item xs={12} style={{padding: 65}}>
            <Header />
          </Grid>
          <Grid item xs={12} >
            <Countdown />
          </Grid>
          <Grid item xs={12} style={{padding: 100}}>
            <Carrousel />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default App
