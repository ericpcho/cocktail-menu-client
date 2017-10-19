import React from 'react';
import * as actions from '../../actions/cocktail.js'
import {connect} from 'react-redux';

export class MenuItem extends React.Component {

  onClick() {
    const selection = this.props.name;
    const filter = this.props.menuItems.filter(function(item) {
      return item.cocktailName !== selection
    })
    this.props.dispatch(actions.deleteMenuItem(filter))
  }

  render () {
    let ingredients = this.props.ingredients.map(ingredient => {
      return <li>{ingredient}</li>
    })

    if (this.props.view === 'sharedMenu') {
      return (
        <div className='menu-item'>
          <h2>{this.props.name}</h2>
          <ul>{ingredients}</ul>
        </div>
      )
    }
    else {
      return (
          <div className='menu-item'>
            <h3>{this.props.name}</h3>
            <ul>{ingredients}</ul>
            <button onClick={event => this.onClick(event)}>x</button>
          </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  menuItems: state.menuItems,
  view: state.view
});

export default connect(mapStateToProps)(MenuItem);