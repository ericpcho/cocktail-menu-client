import React from 'react';
import { connect } from 'react-redux';
import HomeOption from '../home-option/home-option';
import NavBar from '../nav-bar/nav-bar';
import Header from '../header/header';
import Search from '../search/search';
import CocktailCard from '../cocktail-card/cocktail-card';
import CocktailRecipe from '../cocktail-recipe/cocktail-recipe';
import MenuItem from '../menu-item/menu-item';
import * as actions from '../../actions/cocktail.js'

import './page.css';

export class Page extends React.Component {
  onClick(event) {
    this.props.dispatch(actions.postMenu(this.props.menuItems)).then(() => {
      this.props.dispatch(actions.fetchMenuId(this.props.id));
    });
  }

  render() {
    let homeDescription;
    let homeOptions;
    let drinkOptions;
    let cocktailCards;
    let cocktailRecipe;
    let menuItems;
    let search;

    if (this.props.view === 'home') {
      homeDescription = <div className='appDescription'>
        <h2>Cocktail Search</h2>
        <p className="intro">
          Welcome to Cocktail Search! Do you ever have a bunch of ingredients at home
        for cocktails but aren't sure what you can make? Have you ever wanted to recreate a drink you
        tried at a bar but don't know what the ingredients are? With Cocktail Search, both of these
        problems can be solved. By clicking the buttons below, you can either search for drinks by name
        or select the ingredients you currently have to find different cocktails. Each cocktail has its
        own recipe card with an ingredients list and instructions.
        </p>
      </div>;
      homeOptions = [<HomeOption text='Search Drinks by Name' newView='search' key={0} />,
      <HomeOption text='Find Drinks by Ingredients' newView='chooseLiquor' key={1} />];
    }

    else if (this.props.view === 'search') {
      if (this.props.hasCocktail) {
        search = <Search />
        drinkOptions = this.props.cocktails.map((drink, key) => (
          <CocktailCard key={key} selectedItem={drink.cocktailName} />))
        cocktailRecipe =
          <CocktailRecipe image={this.props.selectedCocktail[0].thumbnail} name={this.props.selectedCocktail[0].cocktailName}
            ingredients={this.props.selectedCocktail[0].ingredients} recipe={this.props.selectedCocktail[0].recipe} />
      }
      else {
        search = <Search />
        drinkOptions = this.props.cocktails.map((drink, key) => (
          <CocktailCard key={key} selectedItem={drink.cocktailName} />))
      }
    }

    else if (this.props.view === 'chooseLiquor') {
      if (this.props.isLoading) {
        return <p className='loading-screen'>Loading...</p>
      }
      else {
        cocktailCards = this.props.alcohol.map((alcohol, key) => (
          <CocktailCard key={key} selectedItem={alcohol} />
        ))
      }
    }
    else if (this.props.view === 'chooseBase') {
      let bases = [];
      this.props.cocktails.forEach((cocktail) => {
        for (let i = 0; i < cocktail.baseLiquid.length; i++) {
          bases.push(cocktail.baseLiquid[i]);
        }
      })
      let filteredBases = Array.from(new Set(bases))
      cocktailCards = filteredBases.map((base, key) => (
        <CocktailCard key={key} selectedItem={base} />
      ))
    }
    else if (this.props.view === 'chooseDrink') {
      drinkOptions = this.props.cocktails.map((drink, key) => (
        <CocktailCard key={key} selectedItem={drink.cocktailName} />
      ))
    }
    else if (this.props.view === 'recipe') {
      let filteredCocktails = this.props.cocktails.filter((cocktail) => {
        return cocktail.cocktailName !== this.props.selectedCocktail[0].cocktailName
      })
      drinkOptions = filteredCocktails.map((drink, key) => (
        <CocktailCard key={key} selectedItem={drink.cocktailName} />
      ))
      cocktailRecipe =
        <CocktailRecipe image={this.props.selectedCocktail[0].thumbnail} name={this.props.selectedCocktail[0].cocktailName} ingredients={this.props.selectedCocktail[0].ingredients} recipe={this.props.selectedCocktail[0].recipe} />
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
            {search}
            {homeDescription}
            {homeOptions}
            {cocktailCards}
            {cocktailRecipe}
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
  isLoading: state.loading,
  hasCocktail: state.hasCocktail
});

export default connect(mapStateToProps)(Page);