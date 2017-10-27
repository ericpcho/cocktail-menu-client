import React from 'react';
import * as actions from '../../actions/cocktail.js'
import {connect} from 'react-redux';

import './menu-item.css';

export class MenuItem extends React.Component {

  onClick() {
    const selection = this.props.name;
    const filter = this.props.menuItems.filter(function(item) {
      return item.cocktailName !== selection
    })
    this.props.dispatch(actions.deleteMenuItem(filter))
  }

  render () {
    let ingredients = this.props.ingredients.map((ingredient, key) => {
      return <li key={key}>{ingredient}</li>
    })

    if (this.props.view === 'sharedMenu') {
      return (
        <div className='menu-item'>
          <h3>{this.props.name}</h3>
          <ul>{ingredients}</ul>
        </div>
      )
    }
    else {
      return (
          <div className='menu-item'>
            <h3>{this.props.name}</h3>
            <ul>{ingredients}</ul>
            <button className='btn btn-default delete-button' onClick={event => this.onClick(event)}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
          </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  menuItems: state.menuItems,
  view: state.view,
  selectedCocktail: state.selectedCocktail
});

export default connect(mapStateToProps)(MenuItem);