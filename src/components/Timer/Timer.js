import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

import TimerDisplay from './TimerDisplay'
import TimerButton from './TimerButton'


class Timer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isOn: false,
      minutes: '10',
      seconds: '00',
    }

    //Binding methods in constructor
    this.startTimer = this.startTimer.bind(this)
    this.tick = this.tick.bind(this)

    //Class variables that will be referenced in multiple methods
    this.secondsRemaining = 0
    this.timerInterval = 0
  }

  tick() {
    let minutes = Math.floor(this.secondsRemaining / 60)
    let seconds = this.secondsRemaining - (minutes * 60)

    this.setState({
      minutes: minutes,
      seconds: seconds
    })

    //Modify output string for when minutes and seconds are less than 10
    //so it displays as a two-digit value, i.e. '08'
    if (minutes < 10) {
      this.setState({
        minutes: '0' + minutes,
      })
    }
    if (seconds < 10) {
      this.setState({
        seconds: '0' + this.state.seconds,
      })
    }

    if(this.secondsRemaining > 0) {
      this.secondsRemaining -= 1
    }
    
    if(this.secondsRemaining === 0 && this.state.minutes === 0){
      this.stopTimer()
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval)
    this.setState({
      isOn: false,
      minutes: '',
      seconds: '',
    })
  }

  stopTimer() {
    this.setState({isOn: false}, 
      clearInterval(this.timerInterval))
    
  }
      
  startTimer() {
    this.timerInterval = setInterval(this.tick, 1000)

    //Set starting time
    let time = this.state.minutes
    this.secondsRemaining = time * 60

    //Update state as the timer is now On
    this.setState({
      isOn : true
    })
  }
  
  render() {
    const isOn = this.state.isOn

    const renderCompleteMessage = () => {
      return(<p>10-Minute Interval Complete. Great job!</p>)}

    if(isOn) {
      return (
        <Grid container direction="row" justify = "center" alignItems = "center">
          {this.state.minutes === '00' && this.state.seconds === '00' ? 
            renderCompleteMessage() :  
            <TimerDisplay minutes={this.state.minutes} seconds={this.state.seconds} />}
        </Grid>
      )

    } else {
      return (
        <Grid container direction="row" justify = "center" alignItems="center">
          <TimerButton handleStart={this.startTimer} minutes={this.state.minutes}/>
          <TimerDisplay minutes={this.state.minutes} seconds={this.state.seconds} />
        </Grid>
      )
    }
  }
}

export default Timer
