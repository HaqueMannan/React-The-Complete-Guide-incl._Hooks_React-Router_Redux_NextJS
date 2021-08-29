import React, { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';

import useHTTP from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetail = () => {
   const { sendRequest, status, data: loadedQuote, error } = useHTTP(getSingleQuote, true);
   const match = useRouteMatch();
   const params = useParams();
   const { quoteId } = params;


   useEffect(() => {
      sendRequest(quoteId);
   }, [sendRequest, quoteId]);

   if(status === 'pending') {
      return(
         <div className="centered">
            <LoadingSpinner />
         </div>
      );
   };

   if(error) {
      return(
         <p className="centered">{error}</p>
      );
   };

   if(!loadedQuote.text) {
      return(
         <p>No Quote Found!</p>
      );
   };

   return (
      <Fragment>
         <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
         <Route path={match.path} exact>
            <div className="centered">
               <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
            </div>
         </Route>
         <Route path={`${match.path}/comments`}><Comments /></Route>
      </Fragment>
   );
};

export default QuoteDetail;