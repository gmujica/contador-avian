import React, { Component } from 'react'
import moment from 'moment'
import Paper from '@material-ui/core/Paper'

const paperStyle = {
  //background-color: rgba(0, 156, 255, 0.7);
  //color: rgba(0, 156, 255, 0.7);
  background: 'Transparent'
}


export default class Countdown extends Component{
  constructor(props) {
    super(props)

    this.state = {
      duration: this.getRemaingTime(),
      paused: false
    }

    this.togglePaused = this.togglePaused.bind(this)
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        duration: this.getRemaingTime()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  getRemaingTime() {
    let now = moment(),
      newYear = moment({year: now.year() + 1}),
        diff = newYear.diff(now)

    return moment.duration(diff)
  }

  togglePaused() {
    this.setState((prevState, props) => {
      const paused = !prevState.paused

      if (paused) {
        clearInterval(this.interval)
      } else {
        this.interval = setInterval(() => {
          this.setState({
            duration: this.getRemaingTime()
          })
        }, 1000)
      }
      return {
          paused
      }
    })
  }

  render() {
    const { duration } = this.state
    return(
      <section>
      <Paper style={paperStyle}>
        <div className="hero-body">
          <div className="container">
            <section className="secction">
              <nav className="level">
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Days</p>
                    <p className="title">{Math.floor(duration.asDays())}</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Hours</p>
                    <p className="title">{duration.hours().toString().padStart(2, '0')}</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Minutes</p>
                    <p className="title">{duration.minutes().toString().padStart(2, '0')}</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Seconds</p>
                    <p className="title">{duration.seconds().toString().padStart(2, '0')}</p>
                  </div>
                </div>
                </nav>
            </section>
          </div>
        </div>
        </Paper>
      </section>
    )
  }
}
