import React from 'react'
import PropTypes from 'prop-types'

import Alarm from '@material-ui/icons/Alarm'
import Button from '@material-ui/core/Button'

const TimerButton = (props) => {
  return (
   
    <Button 
      disabled={!props.minutes} 
      onClick={props.handleStart}
      color="secondary" 
      label="Start">
      <Alarm style={{fontSize: '36px'}} /> 
    </Button>
        
  )
}
TimerButton.propTypes = {
  handleStart: PropTypes.func.isRequired,
  minutes: PropTypes.string.isRequired,
}
export default TimerButton


      
