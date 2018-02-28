import React from "react";
import * as actions from "../../actions/cocktail.js";
import { connect } from "react-redux";

import "./home-option.css";

export class HomeOption extends React.Component {
  onClick(event) {
    this.props.dispatch(actions.changeView(this.props.newView));
  }

  render() {
    return (
      <div onClick={e => this.onClick(e)} className="home-option">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default connect()(HomeOption);
