import React from 'react';
import {connect} from 'react-redux';

// import NavBar from '../nav-bar/nav-bar';
// import DrinkOption from '../drink-option/drink-option';

export class Header extends React.Component {
    render() {
      // let drinkOption;
      let headerText;
      
      if (this.props.view === 'chooseLiquor') {
        headerText = 
          <div>
            <h2>Welcome!</h2>
            <h3>Click a liquor below to start making your drink.</h3>
          </div>
      }
      else if (this.props.view === 'chooseBase') {
        headerText = 
          <div>
            <h2>Whiskey</h2>
            <h3>Pick your base ingredient</h3>
          </div>
      }
      else if (this.props.view === 'chooseDrink') {
        headerText = 
          <div>
            <h2>Whiskey</h2>
            <h2>Lemon juice</h2>
            <h3>Select a drink</h3>
          </div>
      }
      else if (this.state === 'recipe')
        headerText = 
          <div>
            <h2>Whiskey Sour</h2>
          </div>
      return (
        <div className="header">
          {headerText}
        </div>
      );
    };
  };
  
  const mapStateToProps = state => ({
    view: state.view
  });
  
  export default connect(mapStateToProps)(Header);