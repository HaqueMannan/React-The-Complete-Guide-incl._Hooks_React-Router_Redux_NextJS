import UserFinder from './components/UserFinder';
import UsersContext from './store/users-context';

const DUMMY_USERS = [
   { id: 'u1', name: 'Alex' },
   { id: 'u2', name: 'Beth' },
   { id: 'u3', name: 'Charlie' },
   { id: 'u4', name: 'Diane' }
];

function App() {
   const usersContext = {
      users: DUMMY_USERS
   }

   return (
      <UsersContext.Provider value={usersContext}>
         <UserFinder />
      </UsersContext.Provider>
   );
};

export default App;