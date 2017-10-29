import React from 'react';
import * as actions from '../../actions/cocktail.js'
import { connect } from 'react-redux'

import './search.css';

export class Search extends React.Component {

  onSubmit(event) {
    event.preventDefault();
    const value = this.searched.value;
    console.log(value);
    this.props.dispatch(actions.fetchCocktailsByName(value));
  }

  render() {
    return (
      <form id="form" className="form">
        <label>Search by Name
          <input type="text" className="form-input" ref={searchTerm => this.searched = searchTerm} />
        </label>
        <button onClick={(e) => this.onSubmit(e)} type="submit" className="submit-button">Submit</button>
      </form>
    )
  }
}

export default connect()(Search);