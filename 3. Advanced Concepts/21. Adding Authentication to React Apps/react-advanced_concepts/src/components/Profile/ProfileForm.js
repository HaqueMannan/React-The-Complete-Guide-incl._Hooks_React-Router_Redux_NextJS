import React, { useRef, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
   const history = useHistory();
   const newPasswordInputRef = useRef();
   const [isLoading, setIsLoading] = useState(false);
   const authCtx = useContext(AuthContext);

   const submitHandler = (event) => {
      event.preventDefault();
      const enteredNewPassword = newPasswordInputRef.current.value;
      // Optional: Add Validation

      setIsLoading(true);

      fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAv_ELkr2S7sOfDKPi1d9Jd39kmLFzRvHo', {
         method: 'post',
         body: JSON.stringify({
            idToken: authCtx.token,
            password: enteredNewPassword,
            returnSecureToken: false
         }),
         headers: {
            'Content-Type': 'application/json'
         }
      }).then(res => {
         setIsLoading(false);
         if(res.ok) {
            return res.json();
         } else {
            return res.json().then(data => {
               let errorMessage = 'Authentication Failed!';
               if(data && data.error && data.error.message) {
                  errorMessage = data.error.message;
               };
               throw new Error(errorMessage);
            });
         };
      }).then(data => {
         history.replace('/');
      }).catch(err => {
         alert(err.message);
      });
   };

   return (
      <form className={classes.form} onSubmit={submitHandler}>
         <div className={classes.control}>
            <label htmlFor='new-password'>New Password</label>
            <input type='password' id='new-password' ref={newPasswordInputRef} />
         </div>
         <div className={classes.action}>
            {!isLoading && <button>Change Password</button>}
            {isLoading && <p>Updating Password...</p>}
         </div>
      </form>
   );
};

export default ProfileForm;