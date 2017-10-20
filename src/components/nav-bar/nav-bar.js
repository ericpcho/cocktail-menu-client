import React from 'react';
import {connect} from 'react-redux';
import NavButton from '../navbutton/nav-button';

import './nav-bar.css'

export class NavBar extends React.Component {
  render() {
    return (
      <header>
        <nav className = 'navigation'>
          <ul className='nav-bar'>
            <NavButton text={'Home'} route={'chooseLiquor'} />
            <NavButton text={'View Menu'} route={'menu'} />
          </ul>
        </nav>
      </header>
    )
  }
}

export default connect()(NavBar);