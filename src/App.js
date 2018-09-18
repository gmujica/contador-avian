import React, { Component } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Countdown from './components/Countdown.jsx'
import Carrousel from './components/Carrousel.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Countdown />
        <Carrousel />
        <Footer />
      </div>
    );
  }
}

export default App
