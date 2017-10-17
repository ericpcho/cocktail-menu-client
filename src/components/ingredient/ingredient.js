import React from 'react';
import * as actions from '../../actions/cocktail.js'
import {connect} from 'react-redux'

export class Ingredient extends React.Component {

  onClick(event) {
    if (this.props.view === 'chooseLiquor') {
      const selection = this.props.choices;
      this.props.dispatch(actions.fetchCocktails(selection))
    }
    else if (this.props.view === 'chooseBase') {
      const selection = this.props.choices;
      const filter = this.props.cocktails.filter(function(cocktail) {
        return cocktail.baseLiquid === selection
      })
      this.props.dispatch(actions.filterCocktails(filter));
    }
    else if (this.props.view === 'chooseDrink' || this.props.view === 'recipe') {
      const selection = this.props.choices;
      const filter = this.props.cocktails.filter(function(cocktail) {
        return cocktail.cocktailName === selection
      })
      this.props.dispatch(actions.displayCocktail(filter))
    }
  }

  render() {
    return (
      <div onClick={e => this.onClick(e)}>
        <p>{this.props.choices}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  view: state.view,
  cocktails: state.cocktails
});

export default connect(mapStateToProps)(Ingredient);