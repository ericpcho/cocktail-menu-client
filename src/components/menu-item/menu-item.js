import React from 'react';
import * as actions from '../../actions/cocktail.js'
import {connect} from 'react-redux';

export class MenuItem extends React.Component {

  onClick() {
    this.props.dispatch(actions.saveToMenu())
  }
  

  render () {
    return (
        <div className='menu-item'>
          <h2>{this.props.name}</h2>
          <h3>{this.props.ingredients}</h3>
          <button onClick={event => this.onClick(event)}>X</button>
        </div>
    )
  }
}



export default connect()(MenuItem);