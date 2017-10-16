import React from 'react';
// import {connect} from 'react-redux';

export class Ingredient extends React.Component {
  
    render() {
      let ingredient;
      if (props.view === chooseLiquor) {
        ingredient = <h3>Liquor</h3>
      }
      else if (props.view === chooseBase) {
        ingredient = <h3>Base</h3>
      }
      
      return (
        <div className="ingredient">
          {ingredient}
        </div>
      );
    };
  };
  
  const mapStateToProps = state => ({
    view: state.view
  });
  
  export default connect(mapStateToProps)(Ingredient);