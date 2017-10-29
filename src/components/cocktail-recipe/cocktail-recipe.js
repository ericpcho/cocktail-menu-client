import React from 'react';
import * as actions from '../../actions/cocktail.js'
import { connect } from 'react-redux';

import './cocktail-recipe.css';

export class CocktailRecipe extends React.Component {

  onClick() {
    this.props.dispatch(actions.saveToMenu())
  }

  render() {
    let ingredients = this.props.ingredients.map((ingredient, key) => {
      return <li key={key}>{ingredient}</li>
    })

    return (
      <div className="drink-description">
        <h3>{this.props.name}</h3>
        <div className="recipe-ingredients">
          <div className="image-container">
            <img src={this.props.image} alt={this.props.name}></img>
          </div>
          <div className="ingredients-container">
            <ul>{ingredients}</ul>
          </div>
        </div>
        <p>{this.props.recipe}</p>
        <button onClick={event => this.onClick(event)}>Add to Menu</button>
      </div>
    )
  }
}

export default connect()(CocktailRecipe);