import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
// import Counter from './components/Counter-ClassBasedComponent';

function App() {
   const isAuth = useSelector(state => state.auth.isAuthenticated);

   return (
      <div>
         <Fragment>
            <Header />
            {!isAuth && <Auth />}
            {!isAuth && <UserProfile />}
            <Counter />
         </Fragment>
      </div>
   );
};

export default App;