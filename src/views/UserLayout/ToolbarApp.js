import React from 'react';
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import ButtonLink from '../../components/ButtonLink';

function ToolbarApp(props) {
  return (
    <AppBar>
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
        >
          <Grid item>
            <Typography variant="h6">DoSP</Typography>
          </Grid>

          <Grid item >
            {props.menu.map(item => (
              <ButtonLink to={item.to} title={item.title} key={item.to} />
            ))}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default ToolbarApp;
