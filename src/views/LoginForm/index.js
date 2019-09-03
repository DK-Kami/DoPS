import React from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      login: '',
    };
  }

  // componentWillMount() {
  //   if (this.props.isAuth) {
  //     window.history.pushState({}, '', '/');
  //   }
  // }

  render() {
    return (
      <Row>
        <Col>
          <button onClick={this.props.signIn}>
            da
          </button>
        </Col>
      </Row>
    )
  }
};

export default LoginForm;
