import React from 'react';
import * as actions from '../../actions/cocktail.js'
import {connect} from 'react-redux';

import './nav-button.css'

export class NavButton extends React.Component {
  onClick() {
    if (this.props.text === 'Home') {
    this.props.dispatch(actions.returnToHome())
    }
    else if (this.props.text === 'View Menu') {
      this.props.dispatch(actions.goToMenu())
    }
  }
  
  render() {
  return (
    <li className='nav-button'>
      <a onClick={event => this.onClick(event)}>{this.props.text}</a>
    </li>
  )
}
}

export default connect()(NavButton);