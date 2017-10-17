import React from 'react';
import {connect} from 'react-redux';
import Header from '../header/header';
import Ingredient from '../ingredient/ingredient';
import DrinkOption from '../drink-option/drink-option';
import DrinkDescription from '../drink-description/drink-description';
import MenuItem from '../menu-item/menu-item';
import {drinks} from './test.js';

export class Page extends React.Component {
  render() {

    // let ingredient;
    let drinkOptions;
    let ingredients;
    let drinkDescription;

    // let menuItem;
    if (this.props.view === 'chooseLiquor') {
      ingredients = this.props.alcohol.map((alcohol) => (
        <Ingredient choices={alcohol} />
      ))
    }
    else if (this.props.view === 'chooseBase') {
      let bases = this.props.cocktails.map((cocktail) => {
        return cocktail.baseLiquid
      })
      let filteredBases = Array.from(new Set(bases))
      ingredients = filteredBases.map((base) => (
        <Ingredient choices={base} />
      )) 
    }
    else if (this.props.view === 'chooseDrink') {
      drinkOptions = this.props.cocktails.map((drink, key) => (
        <Ingredient choices={drink.cocktailName} />
      ))
    }
    else if (this.props.view === 'recipe') {
      drinkOptions = this.props.cocktails.map((drink, key) => (
        <Ingredient choices={drink.cocktailName} />
      ))
      drinkDescription = 
        <DrinkDescription image={this.props.selectedCocktail[0].thumbnail} name={this.props.selectedCocktail[0].cocktailName} ingredients={this.props.selectedCocktail[0].ingredients} recipe={this.props.selectedCocktail[0].recipe}/>
    }
    // else if (this.props.view === menu) {
    //   menuItem = <MenuItem />
    // }
    
    return (
      <div className="page">
        <Header />
        {ingredients}
        {drinkDescription}
        {drinkOptions}
      </div>
    );
  };
};

const mapStateToProps = state => ({
  view: state.view,
  alcohol: state.alcohol,
  cocktails: state.cocktails,
  selectedCocktail: state.selectedCocktail
});

export default connect(mapStateToProps)(Page);