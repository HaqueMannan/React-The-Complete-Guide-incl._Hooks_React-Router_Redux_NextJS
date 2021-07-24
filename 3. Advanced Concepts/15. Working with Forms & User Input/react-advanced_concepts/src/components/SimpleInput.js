import React, { useRef, useState } from 'react';

const SimpleInput = (props) => {
   // Read User Input with useRef:
   const nameInputRef = useRef();

   // Read User Input On Every Keystroke:
   const [enteredName, setEnteredName] = useState('');
   const nameInputChangeHandler = (event) => {
      setEnteredName(event.target.value);
   };

   // Form Validation Example:
   const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

   const formSubmissionHandler = (event) => {
      event.preventDefault();

      if(enteredName.trim() === '') {
         setEnteredNameIsValid(false);
         return;
      };

      setEnteredNameIsValid(true);

      // Value from useState:
      console.log(enteredName);

      // Value from useRef:
      const enteredValue = nameInputRef.current.value;
      console.log(enteredValue);

      // Reset input using useState and the value prop:
      setEnteredName('');

      // Reset input using useRef:
      // nameInputRef.current.value = ''     // NOT RECOMMENDED, DO NOT MANIPULATE THE REAL DOM DIRECTLY, LET REACT MANIPULATE THE DOM.
   };

   const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';

   return(
      <form onSubmit={formSubmissionHandler} >
         <div className={nameInputClasses} >
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef} onChange={nameInputChangeHandler} value={enteredName} />
            { !enteredNameIsValid && <p className="error-text">Name must not be empty.</p> }
         </div>

         <div className="form-actions">
            <button>Submit</button>
         </div>
      </form>
   );
};

export default SimpleInput;