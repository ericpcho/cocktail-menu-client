import React from 'react';
import Page from './components/page/page';
import SharedMenu from './components/shared-menu/shared-menu';

import {BrowserRouter as Router, Route} from 'react-router-dom';


// const routes = [
//   {
//     path: '/',
//     exact: true,
//     main: () => <Page />
//   },
//   {
//     path: '/:id',
//     exact: false,
//     main: () => <SharedMenu />
//   }
// ];

function Layout(){
  return (
    <Router>

        <div>
          <Route path="/:id" component={SharedMenu} />
          <Route exact path="/" component={Page} />
        </div>

    </Router>
  )
}

export default Layout;