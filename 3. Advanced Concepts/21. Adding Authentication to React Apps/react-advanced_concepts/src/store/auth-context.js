import React, { useState, useEffect, useCallback } from 'react';

let logoutTimer;

const AuthContext = React.createContext({
   token: '',
   isLoggedIn: false,
   login: (token) => {},
   logout: () => {}
});

const calculateRemainingTime = (expirationTime) => {
   const currentTime = new Date().getTime();
   const adjExpirationTime = new Date(expirationTime).getTime();
   const remainingExpiration = adjExpirationTime - currentTime
   return remainingExpiration;
};

const retrieveStoredToken = () => {
   const storedToken = localStorage.getItem('token');
   const storedExpirationDate = localStorage.getItem('expirationTime');
   const remainingTime = calculateRemainingTime(storedExpirationDate);

   if(remainingTime <= 60000) {
      localStorage.removeItem('token');
      localStorage.removeItem('expirationTime');
      return null;
   };

   return {
      token: storedToken,
      duration: remainingTime
   };
};

export const AuthContextProvider = (props) => {
   const tokenData = retrieveStoredToken();
   let initialToken;

   if(tokenData) {
      initialToken = tokenData.token;
   };

   const [token, setToken] = useState(initialToken);
   const userIsLoggedIn = !!token;

   const logoutHandler = useCallback(() => {
      setToken(null);
      localStorage.removeItem('token');
      localStorage.removeItem('expirationTime');

      if(logoutHandler) {
         clearTimeout(logoutTimer)
      };
   }, []);

   const loginHandler = (token, expirationTime) => {
      setToken(token);
      localStorage.setItem('token', token);
      localStorage.setItem('expirationTime', expirationTime);

      const remainingTime = calculateRemainingTime(expirationTime);
      logoutTimer = setTimeout(logoutHandler, remainingTime);
   };

   useEffect(() => {
      if(tokenData) {
         console.log(tokenData.duration);    // Only see the duration time reducing if the user is automatically logged in for testing the useEffect.
         logoutTimer = setTimeout(logoutHandler, tokenData.duration);
      };
   }, [tokenData, logoutHandler]);

   const contextValue = {
      token: token,
      isLoggedIn: userIsLoggedIn,
      login: loginHandler,
      logout: logoutHandler
   };

   return(
      <AuthContext.Provider value={contextValue}>
         {props.children}
      </AuthContext.Provider>
   );
};

export default AuthContext;