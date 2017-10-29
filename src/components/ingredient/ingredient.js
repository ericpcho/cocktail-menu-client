import React from 'react';
import * as actions from '../../actions/cocktail.js'
import { connect } from 'react-redux'

import './ingredient.css';

export class Ingredient extends React.Component {
  onClick(event) {
    const selection = this.props.choices;
    let filter;

    if (this.props.view === 'chooseLiquor') {
      this.props.dispatch(actions.fetchCocktailsByAlcohol(selection))
    }
    else if (this.props.view === 'chooseBase') {
      filter = this.props.cocktails.filter(function (cocktail) {
        return cocktail.baseLiquid.includes(selection);
      })
      this.props.dispatch(actions.filterCocktailsByBase(filter, selection));
    }
    else if (this.props.view === 'chooseDrink' || this.props.view === 'recipe') {
      filter = this.props.cocktails.filter(function (cocktail) {
        return cocktail.cocktailName === selection
      })
      this.props.dispatch(actions.displayRecipe(filter))
    }
    else if (this.props.view === 'search') {
      filter = this.props.cocktails.filter(function (cocktail) {
        return cocktail.cocktailName === selection
      })
      this.props.dispatch(actions.displaySearchedRecipe(filter))
    }
  }

  render() {
    if (this.props.view === 'chooseDrink' || this.props.view === 'recipe') {
      return (
        <div onClick={e => this.onClick(e)} className='ingredient'>
          <p><i className="fa fa-glass" aria-hidden="true"></i>  {this.props.choices}</p>
        </div>
      )
    }
    else {
      return (
        <div onClick={e => this.onClick(e)} className='ingredient'>
          <p><i className="fa fa-tint" aria-hidden="true"></i>  {this.props.choices}</p>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  view: state.view,
  cocktails: state.cocktails,
});

export default connect(mapStateToProps)(Ingredient);