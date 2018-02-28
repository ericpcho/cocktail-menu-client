import React from "react";
import * as actions from "../../actions/cocktail.js";
import { connect } from "react-redux";

import "./cocktail-card.css";

export class CocktailCard extends React.Component {
  onClick(event) {
    const selectedItem = this.props.selectedItem;
    const filterByCocktailName = this.props.cocktails.filter(function(
      cocktail
    ) {
      return cocktail.cocktailName === selectedItem;
    });

    if (this.props.view === "chooseLiquor") {
      this.props.dispatch(actions.fetchCocktailsByAlcohol(selectedItem));
    } else if (this.props.view === "chooseBase") {
      const filterByBaseLiquid = this.props.cocktails.filter(function(
        cocktail
      ) {
        return cocktail.baseLiquid.includes(selectedItem);
      });
      this.props.dispatch(
        actions.filterCocktailsByBase(filterByBaseLiquid, selectedItem)
      );
    } else if (
      this.props.view === "chooseDrink" ||
      this.props.view === "recipe"
    ) {
      this.props.dispatch(actions.displayRecipe(filterByCocktailName));
    } else if (this.props.view === "search") {
      this.props.dispatch(actions.displaySearchedRecipe(filterByCocktailName));
    }
  }

  render() {
    if (
      this.props.view === "chooseDrink" ||
      this.props.view === "recipe" ||
      this.props.view === "search"
    ) {
      return (
        <div onClick={e => this.onClick(e)} className="cocktailCard">
          <p>
            <i className="fa fa-glass" aria-hidden="true" />{" "}
            {this.props.selectedItem}
          </p>
        </div>
      );
    } else {
      return (
        <div onClick={e => this.onClick(e)} className="cocktailCard">
          <p>
            <i className="fa fa-tint" aria-hidden="true" />{" "}
            {this.props.selectedItem}
          </p>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  view: state.view,
  cocktails: state.cocktails
});

export default connect(mapStateToProps)(CocktailCard);
