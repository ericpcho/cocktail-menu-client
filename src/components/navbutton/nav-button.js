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
    let count;
    if (this.props.text === 'View Menu') {
      count = `(${this.props.menuItems.length})`
    }
    else {
      count = ''
    }

  return (
    <li className='nav-button'>
      <a onClick={event => this.onClick(event)}>{this.props.text}{count}</a>
    </li>
  )
}
}

const mapStateToProps = state => ({
  menuItems: state.menuItems,
});

export default connect(mapStateToProps)(NavButton);