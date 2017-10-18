import React from 'react';
// import {connect} from 'react-redux';
import NavButton from '../navbutton/nav-button';

import './nav-bar.css'

export default class NavBar extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul className='nav-bar'>
            <NavButton text={'Home'} route={'chooseLiquor'} />
            <NavButton text={'View Menu'} route={'menu'} />
          </ul>
        </nav>
      </header>
    )
  }
}