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
    return (
        <div className='menu-item'>
          <h2>{this.props.name}</h2>
          <h3>{this.props.ingredients}</h3>
          <button onClick={event => this.onClick(event)}>X</button>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  menuItems: state.menuItems
});

export default connect(mapStateToProps)(MenuItem);