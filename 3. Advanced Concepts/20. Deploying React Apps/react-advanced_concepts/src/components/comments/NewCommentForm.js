import React, { useRef, useEffect } from 'react';

import classes from './NewCommentForm.module.css';
import LoadingSpinner from '../UI/LoadingSpinner';

import useHTTP from '../../hooks/use-http';
import { addComment } from '../../lib/api';

const NewCommentForm = (props) => {
   const commentTextRef = useRef();
   const { sendRequest, status, error } = useHTTP(addComment);
   const { onAddedComment } = props;

   useEffect(() => {
      if(status === 'completed' && !error) {
         onAddedComment();
      };
   }, [status, error, onAddedComment]);

   const submitFormHandler = (event) => {
      event.preventDefault();

      const enteredText = commentTextRef.current.value;
      // Optional: Could Validate Here

      sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId });
   };

   return (
      <form className={classes.form} onSubmit={submitFormHandler}>
         {status === 'pending' && (
            <div className="centered">
               <LoadingSpinner />
            </div>
         )}
         <div className={classes.control} onSubmit={submitFormHandler}>
            <label htmlFor="comment">Your Comment</label>
            <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
         </div>
         <div className={classes.actions}>
            <button className="btn">Add Comment</button>
         </div>
      </form>
   );
};

export default NewCommentForm;