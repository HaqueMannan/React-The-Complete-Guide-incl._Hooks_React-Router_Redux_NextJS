import React, { useRef, useState } from 'react';

const SimpleInput = (props) => {
   // Read User Input with useRef:
   const nameInputRef = useRef();

   // Read User Input On Every Keystroke:
   const [enteredName, setEnteredName] = useState('');
   const nameInputChangeHandler = (event) => {
      setEnteredName(event.target.value);
   };

   const formSubmissionHandler = (event) => {
      event.preventDefault();

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

   return (
      <form onSubmit={formSubmissionHandler} >
         <div className='form-control'>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef} onChange={nameInputChangeHandler} value={enteredName} />
         </div>

         <div className="form-actions">
            <button>Submit</button>
         </div>
      </form>
   );
};

export default SimpleInput;