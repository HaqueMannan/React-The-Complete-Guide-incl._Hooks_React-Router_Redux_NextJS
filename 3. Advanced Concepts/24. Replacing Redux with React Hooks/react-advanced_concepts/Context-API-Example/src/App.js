import React from "react";
import { Route } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavouritesPage from './containers/Favourites';

const App = (props) => {
   return (
      <React.Fragment>
         <Navigation />
         <main>
            <Route path="/" component={ProductsPage} exact />
            <Route path="/favourites" component={FavouritesPage} />
         </main>
      </React.Fragment>
   );
};

export default App;