import React from "react";
import * as actions from "../../actions/cocktail.js";
import { connect } from "react-redux";

import "./search.css";

export class Search extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const value = this.searched.value;
    console.log(this.props.cocktails);
    this.props.dispatch(actions.fetchCocktailsByName(value));
  }

  render() {
    let displayNone;

    if (this.props.cocktails.length === 0) {
      displayNone = "No Results Found";
    }

    return (
      <div>
        <form id="form" className="form">
          <label className="search-label">
            Search by Name
            <input
              type="text"
              className="form-input"
              ref={searchTerm => (this.searched = searchTerm)}
            />
          </label>
          <button
            onClick={e => this.onSubmit(e)}
            type="submit"
            className="submit-button"
          >
            Submit
          </button>
        </form>
        {displayNone}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cocktails: state.cocktails
});

export default connect(mapStateToProps)(Search);
