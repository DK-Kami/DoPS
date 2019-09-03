import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      login: '',
    };

    
  }

  handleSignInClick() {

  }

  render() {
    return (
      <Grid
        justify="center"
        align="center"
        container
      >
        <Grid item>
          <Card>
            <CardContent>
              nu da
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
};

export default LoginForm;
