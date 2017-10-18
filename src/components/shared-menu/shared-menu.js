import React from 'react';
import {connect} from 'react-redux';
import MenuItem from '../menu-item/menu-item';
import * as actions from '../../actions/cocktail.js'

import './shared-menu.css';

export class SharedMenu extends React.Component {
  
  componentDidMount()
  
  render() {
    let menuItems = this.props.PLACEHOLDER.map((menuItem, key) => (
      <MenuItem name={menuItem.cocktailName} ingredients={menuItem.ingredients} />
    ))

    return (
      <div className='shared-menu'>
        <h2>Cocktail Menu</h2>
        {menuItems}
      </div>
    )
  }
}

