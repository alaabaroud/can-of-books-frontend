import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button'
const LogoutButton=() =>{
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    // <button onClick={() => {
    //   logout({ returnTo: window.location.origin });
    // }}>Log out</button>


    <Button onClick={() => {
      logout({ returnTo: window.location.origin });
    }}>Log out </Button>
  );
}

export default LogoutButton;