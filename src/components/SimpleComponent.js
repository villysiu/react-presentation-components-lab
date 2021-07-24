// Code SimpleComponent Here
import React, { Component } from 'react'

class SimpleComponent extends Component {
    constructor(props) {
      super(props);
  
      // Initial state here...
      this.state = {
          mood: 'happy'
      };
    }
  
    handleClick = () => {
      // Probably do some work to update the state
     
        this.setState({
           mood: (this.state.mood==='happy') ? 'sad' : 'happy'
        })
    }
  
    render() {
      // Return JSX that renders into HTML
      return (
          <div onClick={this.handleClick}>{this.state.mood}</div>
      )
    }
  } 
  export default SimpleComponent;