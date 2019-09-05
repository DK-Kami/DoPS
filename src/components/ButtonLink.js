import React from 'react';
import { Button } from '@material-ui/core';

function redirectTo(link) {
  window.history.pushState({}, '', `${link}`);
}

function ButtonLink(props) {
  return (
    <Button color="inherit" onClick={() => redirectTo(props.link || props.to)}>
      {props.title} 
    </Button>
  )
}

export default ButtonLink;
