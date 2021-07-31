import React, { useRef, useState } from "react";

import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isSixOrSevenChars = (value) => value.trim().length === 6 || value.trim().length === 7;


const Checkout = (props) => {
   const [formInputsValidity, setFormInputsValidity] = useState({
      name: true,
      street: true,
      city: true,
      postcode: true
   });

   const nameInputRef = useRef();
   const streetInputRef = useRef();
   const cityInputRef = useRef();
   const postCodeInputRef = useRef();

   const confirmHandler = (event) => {
      event.preventDefault();

      const enteredName = nameInputRef.current.value;
      const enteredStreet = streetInputRef.current.value;
      const enteredCity = cityInputRef.current.value;
      const enteredPostCode = postCodeInputRef.current.value;

      const enteredNameIsValid = !isEmpty(enteredName);
      const enteredStreetIsValid = !isEmpty(enteredStreet);
      const enteredCityIsValid = !isEmpty(enteredCity);
      const enteredPostCodeIsValid = isSixOrSevenChars(enteredPostCode);

      setFormInputsValidity({
         name: enteredNameIsValid,
         street: enteredStreetIsValid,
         city: enteredCityIsValid,
         postcode: enteredPostCodeIsValid
      });

      const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid & enteredPostCodeIsValid
      if(!formIsValid) {
         return ;
      };

      // Submit Cart Data
      props.onConfirm({
         name: enteredName,
         street: enteredStreet,
         city: enteredCity,
         postcode: enteredPostCode
      });
   };

   const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
   const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`;
   const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`;
   const postcodeControlClasses = `${classes.control} ${formInputsValidity.postcode ? '' : classes.invalid}`;

   return(
      <form className={classes.form} onSubmit={confirmHandler}>
         <div className={nameControlClasses}>
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" ref={nameInputRef} />
            {!formInputsValidity.name && <p>Please enter a valid name!</p>}
         </div>
         <div className={streetControlClasses}>
            <label htmlFor="street">Street</label>
            <input id="street" type="text" ref={streetInputRef} />
            {!formInputsValidity.street && <p>Please enter a valid street!</p>}
         </div>
         <div className={cityControlClasses}>
            <label htmlFor="city">City</label>
            <input id="city" type="text" ref={cityInputRef} />
            {!formInputsValidity.city && <p>Please enter a valid city!</p>}
         </div>
         <div className={postcodeControlClasses}>
            <label htmlFor="postal">Post Code</label>
            <input id="postal" type="text" ref={postCodeInputRef}/>
            {!formInputsValidity.postcode && <p>Please enter a valid post code!</p>}
         </div>
         <div className={classes.actions}>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button className={classes.submit}>Confirm</button>
         </div>
      </form>
   );
};

export default Checkout;