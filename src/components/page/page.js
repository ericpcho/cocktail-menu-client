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
      ingredients = this.props.cocktails.map((cocktail) => (
        <Ingredient choices={cocktail.baseLiquid} />
      ))
    }
    else if (this.props.view === 'chooseDrink') {
      drinkOptions = this.props.cocktails.map((drink, key) => (
        <Ingredient choices={drink.cocktailName} />
      ))
    }
    else if (this.props.view === 'recipe') {
      drinkDescription = drinks.map((drink, key) => (
        <DrinkDescription image={drink.thumbnail} name={drink.cocktailName} ingredients={drink.ingredients} recipe={drink.recipe}/>
      ))
    }
    // else if (this.props.view === menu) {
    //   menuItem = <MenuItem />
    // }
    
    return (
      <div className="page">
        <Header />
        {ingredients}
        {drinkOptions}
        {drinkDescription}
      </div>
    );
  };
};

const mapStateToProps = state => ({
  view: state.view,
  alcohol: state.alcohol,
  cocktails: state.cocktails
});

export default connect(mapStateToProps)(Page);