import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

// Lazy Loading
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
   return (
      <div>
         <Layout>
            <Suspense fallback={<div><LoadingSpinner/></div>}>
               <Switch>
                  <Route exact path="/"><Redirect to="/quotes" /></Route>
                  <Route exact path="/quotes"><AllQuotes /></Route>
                  <Route path="/quotes/:quoteId"><QuoteDetail /></Route>
                  <Route path="/new-quote"><NewQuote /></Route>
                  <Route path="*"><NotFound /></Route>
               </Switch>
            </Suspense>
         </Layout>
      </div>
   );
};

export default App;