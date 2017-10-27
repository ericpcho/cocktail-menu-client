import React from 'react';
import {connect} from 'react-redux';
import NavBar from '../nav-bar/nav-bar';
import Header from '../header/header';
import Ingredient from '../ingredient/ingredient';
import DrinkDescription from '../drink-description/drink-description';
import MenuItem from '../menu-item/menu-item';
import * as actions from '../../actions/cocktail.js'

import './page.css';

export class Page extends React.Component {
  onClick(event) {
    const selection = this.props.menuItems;
    this.props.dispatch(actions.postMenu(selection)).then(() => {
    this.props.dispatch(actions.fetchMenuId(this.props.id));
    });
  }
  
  render() {

    let drinkOptions;
    let ingredients;
    let drinkDescription;
    let menuItems;

    // if (this.props.view === 'home') {

    // }

    if (this.props.view === 'chooseLiquor') {
      if (this.props.isLoading) {
        return <p className='loading-screen'>Loading...</p>
      }
      else {
        ingredients = this.props.alcohol.map((alcohol, key) => (
          <Ingredient key={key} choices={alcohol} />
        ))
      }
    }
    else if (this.props.view === 'chooseBase') {
      // let bases = this.props.cocktails.map((cocktail) => {
      //   return cocktail.baseLiquid
      // })
      let bases = [];
      this.props.cocktails.forEach((cocktail) => {
        for (let i=0; i < cocktail.baseLiquid.length; i++) {
          bases.push(cocktail.baseLiquid[i]);
        }
      })
      let filteredBases = Array.from(new Set(bases))
      ingredients = filteredBases.map((base, key) => (
        <Ingredient key={key} choices={base} />
      )) 
    }
    else if (this.props.view === 'chooseDrink') {
      drinkOptions = this.props.cocktails.map((drink, key) => (
        <Ingredient key={key} choices={drink.cocktailName} />
      ))
    }
    else if (this.props.view === 'recipe') {
      let filteredCocktails = this.props.cocktails.filter((cocktail) => {
        return cocktail.cocktailName !== this.props.selectedCocktail[0].cocktailName
      })
      drinkOptions = filteredCocktails.map((drink, key) => (
        <Ingredient key={key} choices={drink.cocktailName} />
      ))
      drinkDescription = 
        <DrinkDescription image={this.props.selectedCocktail[0].thumbnail} name={this.props.selectedCocktail[0].cocktailName} ingredients={this.props.selectedCocktail[0].ingredients} recipe={this.props.selectedCocktail[0].recipe}/>
    }
    else if (this.props.view === 'menu') {
      menuItems = this.props.menuItems.map((menuItem, key) => (
        <MenuItem key={key} name={menuItem.cocktailName} ingredients={menuItem.ingredients} />
      ))
    }
    
    if (this.props.view === 'menu') {
      return (
        <div className="page">
          <NavBar />
          <button className='share-button' onClick={event => this.onClick(event)}>Publish Menu</button>
          <div className='menu'>
            <h2>Cocktail Menu</h2>
            {menuItems}
          </div>
        </div>
      )
    }

    else {
      return (
        <div className="page">
          <NavBar />
          <div className="results">
            <Header />
            {ingredients}
            {drinkDescription}
            {drinkOptions}
          </div>
        </div>
    );
  }
  };
};

const mapStateToProps = state => ({
  view: state.view,
  alcohol: state.alcohol,
  cocktails: state.cocktails,
  selectedCocktail: state.selectedCocktail,
  menuItems: state.menuItems,
  id: state.id,
  isLoading: state.loading
});

export default connect(mapStateToProps)(Page);