import React from 'react';
import * as actions from '../../actions/cocktail.js'
import {connect} from 'react-redux'

export class Ingredient extends React.Component {

  onClick(event) {
    const selection = this.props.ingredient
    console.log(this.props.ingredient);
    this.props.dispatch(actions.fetchCocktails(selection))
  }

  render() {
    return (
      <div onClick={e => this.onClick(e)}>
        <p>{this.props.ingredient}</p>
      </div>
    )
  }
}

export default connect()(Ingredient);