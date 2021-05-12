import React from 'react';

export const AuthContext = React.createContext({
    isSignedIn: false,
    setStatus: ()=>{}
  })
//isSignedIn & setStatus will be replaced in App.js