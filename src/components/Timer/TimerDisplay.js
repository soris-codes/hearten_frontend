import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const TimerDisplay = (props) => {
  return (
    
    <Typography component="h1" variant="h6" color="secondary"
      style={{justify: 'center'}}>
      {props.minutes}:{props.seconds}
    </Typography>
   
  )
}

TimerDisplay.propTypes = {
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
}

export default TimerDisplay