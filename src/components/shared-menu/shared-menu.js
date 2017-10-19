import React from 'react';
import {connect} from 'react-redux';
import MenuItem from '../menu-item/menu-item';
import * as actions from '../../actions/cocktail.js'

import './shared-menu.css';

export class SharedMenu extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(actions.fetchMenu2(this.props.id))
  }
  
  render() {
    let menuItems = this.props.menuItems.map((menuItem, key) => (
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

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
  menuItems: state.menuItems,
  id: ownProps.match.params.id
  }
};

export default connect(mapStateToProps)(SharedMenu);

