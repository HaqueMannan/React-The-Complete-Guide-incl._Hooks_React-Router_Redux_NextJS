import React, { useRef, useState, useEffect } from 'react';

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
   const [enteredNameTouched, setEnteredNameTouched] = useState(false);

   useEffect(() => {
      if(enteredNameIsValid) {
         console.log('Name input is valid!');
      };
   }, [enteredNameIsValid]);

   const nameInputBlurHandler = (event) => {
      setEnteredNameTouched(true);

      if(enteredName.trim() === '') {
         setEnteredNameIsValid(false);
         return;
      };
   };

   const formSubmissionHandler = (event) => {
      event.preventDefault();

      setEnteredNameTouched(true);

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

   const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
   const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

   return(
      <form onSubmit={formSubmissionHandler} >
         <div className={nameInputClasses} >
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef} onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName} />
            { nameInputIsInvalid && <p className="error-text">Name must not be empty.</p> }
         </div>

         <div className="form-actions">
            <button>Submit</button>
         </div>
      </form>
   );
};

export default SimpleInput;