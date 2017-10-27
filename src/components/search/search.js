import React from 'react';
import * as actions from '../../actions/cocktail.js'
import { connect } from 'react-redux'

import './search.css';

export class Search extends React.Component {

  onSubmit(event){
    event.preventDefault();
    const value = this.input.value;
    this.props.dispatch(actions.fetchCocktailsByName(value));
  }

  render() {
    return (
      <form id="form" className="form">
        <label>Search by Name 
          <input type="text" className="form-input" name="textfield" ref={input => this.input = input}/>
        </label>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    )
  }
}

export default connect()(Search);