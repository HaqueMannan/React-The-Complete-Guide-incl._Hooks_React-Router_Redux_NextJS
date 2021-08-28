import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';

const App = () => {
   return (
      <div>
         <Layout>
            <Switch>
               <Route exact path="/"><Redirect to="/quotes" /></Route>
               <Route exact path="/quotes"><AllQuotes /></Route>
               <Route path="/quotes/:quoteId"><QuoteDetail /></Route>
               <Route path="/new-quote"><NewQuote /></Route>
            </Switch>
         </Layout>
      </div>
   );
};

export default App;