import React from 'react';
// import {connect} from 'react-redux';

import NavButton from '../navbutton/nav-button';

export default class NavBar extends React.Component {
  render() {
    return (
      <header className='nav-bar'>
        <nav>
          <ul>
            <NavButton text={'Home'}/>
            <NavButton text={'View Menu'}/>
          </ul>
        </nav>
      </header>
    )
  }
}