import React from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import history from '../history';
import Header from './Header';

import TaratsaList from './taratses/TaratsaList';

class App extends React.Component {
  render() {
    return (
      <div className="ui container main-view">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={TaratsaList} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;