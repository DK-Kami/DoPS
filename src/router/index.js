import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginForm from '../views/LoginForm';
import UserLayout from '../views/UserLayout';

class RouterLayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: true,
    };

    this.signIn = this.signIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  signIn() {
    console.log('da');
    this.setState({ isAuth: true });
  }
  logOut() {
    this.setState({ isAuth: false });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/login"
            render={() => (
              <LoginForm
                isAuth={this.state.isAuth}
                signIn={this.signIn} />
            )}
            />

          <PrivateRoute
            isAuth={this.state.isAuth}
            component={UserLayout}
            logOut={this.logOut}
            path="/" />
        </Switch>
      </Router>
    );
  }
};

export default RouterLayer;
