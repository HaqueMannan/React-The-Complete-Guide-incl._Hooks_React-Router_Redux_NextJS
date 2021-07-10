import { Fragment, Component } from 'react';
import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
   { id: 'u1', name: 'Alex' },
   { id: 'u2', name: 'Beth' },
   { id: 'u3', name: 'Charlie' },
   { id: 'u4', name: 'Diane' }
];

class UserFinder extends Component {
   constructor() {
      super();
      this.state = {
         filteredUsers: [],
         searchTerm: ''
      };
   };

   searchChangeHandler(event) {
      this.setState({ searchTerm: event.target.value });
   };

   componentDidMount() {
      // Send http request...
      this.setState({
         filteredUsers: DUMMY_USERS
      });
   };

   componentDidUpdate(prevProps, prevState) {
      if(prevState.searchTerm !== this.state.searchTerm) {
         this.setState({
            filteredUsers: DUMMY_USERS.filter((user) => 
               user.name.includes(this.state.searchTerm)
            )
         });
      };
   };

   render() {
      return (
         <Fragment>
            <div className={classes.finder}>
               <input type='search' onChange={this.searchChangeHandler.bind(this)} />
            </div>
            <Users users={this.state.filteredUsers} />
         </Fragment>
      );
   }
};

export default UserFinder;