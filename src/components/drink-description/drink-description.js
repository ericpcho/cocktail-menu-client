import React from 'react';
// import {connect} from 'react-redux';

export default function DrinkDescription(props) {
  return (
      <div className="drink-description">
        <h3>{props.name}</h3>
        <img src={props.image}></img>
        <h4>{props.ingredients}</h4>
        <p>{props.recipe}</p>
      </div>
  )
}