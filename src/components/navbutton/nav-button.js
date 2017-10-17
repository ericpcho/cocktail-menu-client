import React from 'react';
// import {connect} from 'react-redux';

export default function NavButton(props) {
  return (
    <li>
      <a>{props.text}</a>
    </li>
  )
}