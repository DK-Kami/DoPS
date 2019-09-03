import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function ButtonLink(props) {
  return (
    <Button color="inherit">
      <Link to={`/${props.link || props.link}`} >
        {props.title}
      </Link>
    </Button>
  )
}

export default ButtonLink;
