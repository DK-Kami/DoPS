import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import ToolbarApp from './ToolbarApp';
import './UserLayout.css';

import PactsPage from '../PactsPage';
import UsersPage from '../UsersPage';
import ActsPage from '../ActsPage';
import PatroulsPage from '../PatroulsPage';
import TypesPage from '../TypesPage';

const menu = [
  { title: 'Акты', to: '/act', component: ActsPage },
  { title: 'Заключённые пакты', to: '/pacts', component: PactsPage },
  { title: 'Пользователи', to: '/users', component: UsersPage },
  { title: 'Патрули', to: '/patrouls', component: PatroulsPage },
  { title: 'Типы документов', to: '/types', component: TypesPage },
];

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
        <ToolbarApp menu={menu} />

        <div className="main--container">
          <Switch>
            {menu.map(item => (
              <Route
                component={item.component}
                path={item.to}
                key={item.to}
              />
            ))}
          </Switch>
        </div>
      </div>
    );
  }
};

export default UserLayout;
