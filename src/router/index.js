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
      isAuth: false,
    };

    this.signIn = this.signIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  signIn() {
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
            isAuth={this.state.isAuth}
            component={LoginForm}
            path="/login" />

          <PrivateRoute
            isAuth={this.state.isAuth}
            component={UserLayout}
            path="/" />
        </Switch>
      </Router>
    );
  }
};

export default RouterLayer;
