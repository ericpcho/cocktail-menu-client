import React from 'react';
import * as actions from '../../actions/cocktail.js'
import {connect} from 'react-redux';

export class NavButton extends React.Component {
  onClick() {
    if (this.props.text === 'HOME') {
    this.props.dispatch(actions.returnToHome(this.props.route))
    }
    else if (this.props.text === 'View Menu') {
      this.props.dispatch(actions.goToMenu(this.props.route))
    }
  }
  
  render() {
  return (
    <li>
      <a onClick={event => this.onClick(event)}>{this.props.text}</a>
    </li>
  )
}
}

export default connect()(NavButton);