import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import ToolbarApp from './ToolbarApp';

class UserLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (!this.props.isAuth) {
      window.history.pushState({}, '', '/login');
    }
  };

  render() {
    return (
      <div>
        <ToolbarApp />

        <Switch>
          <Route path="/pact" />
          <Route path="/act" />
          <Route path="/create-patroul" />
        </Switch>
      </div>
    );
  }
};

export default UserLayout;
