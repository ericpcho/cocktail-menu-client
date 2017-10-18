import React from 'react';
import Page from './Components/Page';
import SharedMenu from './Components/SharedMenu';

import {BrowserRouter as Router, Route} from 'react-router-dom';


const routes = [
  {
    path: '/api',
    exact: false,
    main: () => <Page />
  },
  {
    path: '/viewmenu',
    exact: false,
    main: () => <SharedMenu />
  }
];

function Layout(){
  return (
    <Router>

        <div>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>

    </Router>
  )
}

export default Layout;