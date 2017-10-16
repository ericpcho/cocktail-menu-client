import React from 'react';
import {connect} from 'react-redux';

import Header from '../header/header';
import Ingredient from '../ingredient/ingredient';
import DrinkOption from '../drink-option/drink-option';
import DrinkDescroption from '../drink-description/drink-description';
import MenuItem from '../menu-item/menu-item';

export class Page extends React.Component {

  render() {
    // let ingredient;
    // let drinkOption;
    // let drinkDescription;
    // let menuItem;
    // if (props.view === chooseLiquor) {
    //   ingredient = <Ingredient />
    // }
    // else if (props.view === chooseBase) {
    //   ingredient = <Ingredient />
    // }
    // else if (props.view === chooseDrink) {
    //   drinkOption = <DrinkOption />
    // }
    // else if (props.view === recipe) {
    //   drinkDescription = <DrinkDescription />
    // }
    // else if (props.view === menu) {
    //   menuItem = <MenuItem />
    // }
    
    return (
      // <div className="page">
      //   <Header />
      //   {ingredient}
      //   {drinkOption}
      //   {drinkDescription}
      //   {menuItem}
      // </div>
      <Header />
    );
  };
};

const mapStateToProps = state => ({
  view: state.view
});

export default connect(mapStateToProps)(Page);