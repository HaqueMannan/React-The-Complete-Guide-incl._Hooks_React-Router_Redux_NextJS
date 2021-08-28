import React, { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
   { id: 'q1', author: 'Alex', text: 'Learning React is fun!' },
   { id: 'q2', author: 'Beth', text: 'Learning React is great!' },
];

const QuoteDetail = () => {
   const params = useParams();

   const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

   if(!quote) {
      return(
         <p>No Quote Found!</p>
      );
   };

   return (
      <Fragment>
         <HighlightedQuote text={quote.text} author={quote.author} />
         <Route path="/quotes/:quoteId/comments"><Comments /></Route>
         {/* <Route path={`/quotes/${params.quoteId}/comments`}><Comments /></Route> */}
      </Fragment>
   );
};

export default QuoteDetail;