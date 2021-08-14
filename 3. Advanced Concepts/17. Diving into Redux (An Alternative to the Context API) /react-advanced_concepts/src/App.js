import React, { Fragment } from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';
// import Counter from './components/Counter-ClassBasedComponent';

function App() {
   return (
      <div>
         <Fragment>
            <Header />
            <Auth />
            <Counter />
         </Fragment>
      </div>
   );
};

export default App;