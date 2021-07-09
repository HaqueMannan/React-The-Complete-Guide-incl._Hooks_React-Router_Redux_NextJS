import { Component } from 'react';
import classes from './Users.module.css';
import User from './User';

const DUMMY_USERS = [
   { id: 'u1', name: 'Alex' },
   { id: 'u2', name: 'Beth' },
   { id: 'u3', name: 'Charlie' },
   { id: 'u4', name: 'Diane' },
];

class Users extends Component {
   constructor() {
      super();
      this.state = {
         showUsers:  true,
      }; 
   };

   toggleUsersHandler() {
      this.setState((curState) => {
         return {
            showUsers: !curState.showUsers
         };
      });
   };

   render() {
      const usersList = (
         <ul>
            {DUMMY_USERS.map((user) => (
               <User key={user.id} name={user.name} />
            ))}
         </ul>
      );

      return (
         <div className={classes.users}>
            <button onClick={this.toggleUsersHandler.bind(this)}>
               {this.state.showUsers ? 'Hide' : 'Show'} Users
            </button>
            {this.state.showUsers && usersList}
         </div>
      );
   };
};

export default Users;