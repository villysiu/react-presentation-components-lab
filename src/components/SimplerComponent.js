// Code SimplerComponent Here
import React from 'react'

const defaultMsg = 'I am just happy'
const SimplerComponent = (props) =>
  <div onClick={props.handleClick}>{defaultMsg}</div>; 

export default SimplerComponent