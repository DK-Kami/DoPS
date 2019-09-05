import React from 'react';
import { Button } from '@material-ui/core';

function redirectTo(link, isCurrentLink) {
  window.history.pushState({}, '', `${link}`);
  return isCurrentLink(link);
}

function ButtonLink(props) {
  const url = props.link || props.to;
  
  function isCurrentLink(url) {
    return window.location.pathname === url;
  }
  
  let activeButton = isCurrentLink(url);
  return (
    <Button
      color={
        !activeButton
        ? 'inherit'
        : 'default'
      }
      onClick={() => activeButton = redirectTo(url, isCurrentLink)}
    >
      {props.title} 
    </Button>
  )
}

export default ButtonLink;
