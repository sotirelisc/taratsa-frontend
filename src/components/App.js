import React from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import history from '../history';
import Header from './Header';

import TaratsaList from './taratses/TaratsaList';
import TaratsaShow from './taratses/TaratsaShow';
import TaratsaCreate from './taratses/TaratsaCreate';

import UserCreate from './users/UserCreate';
import UserSignIn from './users/UserSignIn';
import UserSignOut from './users/UserSignOut';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={TaratsaList} />
              <Route path="/taratses/new" exact component={TaratsaCreate} />
              <Route path="/taratses/:id" exact component={TaratsaShow} />
              <Route path="/users/signup" exact component={UserCreate} />
              <Route path="/users/signin" exact component={UserSignIn} />
              <Route path="/users/signout" exact component={UserSignOut} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;