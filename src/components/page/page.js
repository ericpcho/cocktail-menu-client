import React from 'react';
import {connect} from 'react-redux';

import Header from '../header/header';
import Ingredient from '../ingredient/ingredient';
import DrinkOption from '../drink-option/drink-option';
import DrinkDescroption from '../drink-description/drink-description';
import MenuItem from '../menu-item/menu-item';
import {drinks} from './test.js';
export class Page extends React.Component {
  render() {

    // let ingredient;
    let drinkOptions;
    let ingredients;
    // let drinkDescription;
    // let menuItem;
    if (this.props.view === 'chooseLiquor') {
      console.log(this.props.alcohol);
      ingredients = this.props.alcohol.map((alcohol) => (
        <Ingredient ingredient={alcohol} />
      ))
      console.log(ingredients)
    }
    // else if (props.view === 'chooseBase') {
    //   ingredient = <Ingredient />
    // }
    else if (this.props.view === 'chooseDrink') {
      drinkOptions = drinks.map((drink, key) => (
        <DrinkOption image={drink.thumbnail} name={drink.cocktailName} />
      ))
      console.log(drinkOptions);
    }
    // else if (props.view === 'recipe') {
    //   drinkDescription = <DrinkDescription />
    // }
    // else if (props.view === menu) {
    //   menuItem = <MenuItem />
    // }
    
    return (
      <div className="page">
        <Header />
        {ingredients}
        {drinkOptions}
      </div>
    );
  };
};

const mapStateToProps = state => ({
  view: state.view,
  alcohol: state.alcohol
});

export default connect(mapStateToProps)(Page);