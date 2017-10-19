import React from 'react';
import {connect} from 'react-redux';

import NavBar from '../nav-bar/nav-bar';

export class Header extends React.Component {
    render() {
      // let drinkOption;
      let headerText;
      
      if (this.props.view === 'chooseLiquor') {
        headerText = 
          <div>
            <h2>Welcome!</h2>
            <h3>Click a liquor below to find a drink.</h3>
          </div>
      }
      else if (this.props.view === 'chooseBase') {
        headerText = 
          <div>
            <h2>{this.props.selection}</h2>
            <h3>Pick your base ingredient</h3>
          </div>
      }
      else if (this.props.view === 'chooseDrink') {
        headerText = 
          <div>
            <h2>{this.props.selection[0]} > {this.props.selection[1]}</h2>
            <h3>Select a drink</h3>
          </div>
      }
      else if (this.props.view === 'recipe') {
        headerText = 
          <div>
            <h2>{this.props.selection[0]} > {this.props.selection[1]} > Cocktails</h2>
          </div>
      }

      return (
        <div className="header">
          <NavBar />
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