import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item';
import * as actions from '../../actions/cocktail.js'

import './shared-menu.css';

export class SharedMenu extends React.Component {

  componentDidMount() {
    this.props.dispatch(actions.fetchMenu(this.props.id))
  }

  render() {
    if (this.props.isLoading) {
      return <p className='loading-screen'>Loading...</p>
    }
    else {
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
}

const mapStateToProps = (state, ownProps) => {
  return {
    menuItems: state.menuItems,
    id: ownProps.match.params.id,
    isLoading: state.loading
  }
};

export default connect(mapStateToProps)(SharedMenu);

