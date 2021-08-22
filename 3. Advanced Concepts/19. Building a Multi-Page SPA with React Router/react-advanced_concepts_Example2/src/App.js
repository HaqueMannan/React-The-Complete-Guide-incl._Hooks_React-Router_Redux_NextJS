import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';

const App = () => {
   return (
      <div>
         <Switch>
            <Route exact path="/"><Redirect to="/quotes" /></Route>
            <Route exact path="/quotes"><AllQuotes /></Route>
            <Route path="/quotes/:quoteId"><QuoteDetail /></Route>
            <Route path="/new-quote"><NewQuote /></Route>
         </Switch>
      </div>
   );
};

export default App;