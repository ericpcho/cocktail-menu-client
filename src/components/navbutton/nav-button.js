import React from 'react';
import {connect} from 'react-redux';

export class NavButton extends React.Component {
  onClick() {
    if (props.text === 'HOME') {
    this.props.dispatch(actions.sdfasdfasdf())
    }
    else if (props.text === 'View Menu') {
      this.props.dispatch(actions.asdfasdfa())
    }
  }
  
  render() {
  return (
    <li>
      <a onClick={event => this.onClick(event)}>{props.text}</a>
    </li>
  )
}
}

export default connect()(MenuItem);