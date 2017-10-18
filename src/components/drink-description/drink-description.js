import React from 'react';
import * as actions from '../../actions/cocktail.js'
import {connect} from 'react-redux';

import './drink-description.css';

export class DrinkDescription extends React.Component {

  onClick() {
    this.props.dispatch(actions.saveToMenu())
  }

  render () {
    return (
        <div className="drink-description">
          <h3>{this.props.name}</h3>
          <img src={this.props.image}></img>
          <h4>{this.props.ingredients}</h4>
          <p>{this.props.recipe}</p>
          <button onClick={event => this.onClick(event)}>Save</button>
        </div>
    )
  }
}



export default connect()(DrinkDescription);