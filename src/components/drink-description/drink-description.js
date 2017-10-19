import React from 'react';
import * as actions from '../../actions/cocktail.js'
import {connect} from 'react-redux';

import './drink-description.css';

export class DrinkDescription extends React.Component {

  onClick() {
    this.props.dispatch(actions.saveToMenu())
  }

  render () {
    console.log(this.props.ingredients);
    let ingredients = this.props.ingredients.map(ingredient => {
      return <li>{ingredient}</li>
    })

    return (
        <div className="drink-description">
          <h3>{this.props.name}</h3>
          <div className="recipe-ingredients">
            <img src={this.props.image}></img>
            <ul>{ingredients}</ul>
          </div>
          <p>{this.props.recipe}</p>
          <button onClick={event => this.onClick(event)}>Add to Menu</button>
        </div>
    )
  }
}

export default connect()(DrinkDescription);