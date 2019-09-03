import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import ButtonLink from '../../components/ButtonLink';


function ToolbarApp() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">DoSP</Typography>

        <ButtonLink to="/act" title="Заключить акт" />
        <ButtonLink to="/pact" title="Заключить пакт" />
        <ButtonLink to="/create-patroul" title="Создать патруль" />
      </Toolbar>
    </AppBar>
  )
}

export default ToolbarApp;
