import React from 'react';
// import {connect} from 'react-redux';

import Header from '../header/header';
import Ingredient from '../ingredient/ingredient';
import DrinkOption from '../drink-option/drink-option';
import DrinkDescroption from '../drink-description/drink-description';
import MenuItem from '../menu-item/menu-item';

export class CheeseList extends React.Component {

  render() {
    let ingredient;
    let drinkOption;
    let drinkDescription;
    let menuItem;
    if (props.state === chooseLiquor) {
      ingredient = <Ingredient />
    }
    else if (props.state === chooseBase) {
      ingredient = <Ingredient />
    }
    else if (props.state === chooseDrink) {
      drinkOption = <DrinkOption />
    }
    else if (props.state === recipe) {
      drinkDescription = <DrinkDescription />
    }
    else if (props.state === menu) {
      menuItem = <MenuItem />
    }
    
    return (
      <div className="page">
        <Header />
        {ingredient}
        {drinkOption}
        {drinkDescription}
        {menuItem}
      </div>
    )
  }
}