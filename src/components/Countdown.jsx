import React, { Component } from 'react'
import moment from 'moment'
import Paper from '@material-ui/core/Paper'

const paperStyle = {
  backgroundColor: 'rgba(6, 171, 232, 0.86)'
}

export default class Countdown extends Component{
  constructor(props) {
    super(props)

    this.state = {
      duration: this.getRemaingTime()
    }
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
      fechaLimite = moment("2018-10-22"),
        diff = fechaLimite.diff(now)

    return moment.duration(diff)
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
                    <p className="heading">Dias</p>
                    <p className="title">{Math.floor(duration.asDays())}</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Horas</p>
                    <p className="title">{duration.hours().toString().padStart(2, '0')}</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Minutos</p>
                    <p className="title">{duration.minutes().toString().padStart(2, '0')}</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Segundos</p>
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
