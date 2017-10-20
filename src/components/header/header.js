import React from 'react';
import {connect} from 'react-redux';

import './header.css'

export class Header extends React.Component {
    render() {
      // let drinkOption;
      let headerText;
      
      if (this.props.view === 'chooseLiquor') {
        headerText = 
          <div>
            <h2>Cocktail Menu Maker</h2>
            <h3>Start building your menu by selecting a liquor below</h3>
          </div>
      }
      else if (this.props.view === 'chooseBase') {
        headerText = 
          <div>
            <h2>{this.props.selection}</h2>
            <h3>Select a base ingredient</h3>
          </div>
      }
      else if (this.props.view === 'chooseDrink') {
        headerText = 
          <div>
            <h2>{this.props.selection[0]} › {this.props.selection[1]}</h2>
            <h3>View your drink's recipe card</h3>
          </div>
      }
      else if (this.props.view === 'recipe') {
        headerText = 
          <div>
            <h2>{this.props.selection[0]} › {this.props.selection[1]} › Cocktails</h2>
          </div>
      }

      return (
        <div className="header">
          {headerText}
        </div>
      );
    };
  };
  
  const mapStateToProps = state => ({
    view: state.view,
    selection: state.selection
  });
  
  export default connect(mapStateToProps)(Header);