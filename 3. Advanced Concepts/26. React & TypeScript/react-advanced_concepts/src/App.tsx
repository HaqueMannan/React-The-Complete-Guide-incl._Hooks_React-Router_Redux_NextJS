import ToDos from './components/ToDos';
import Todo from './models/todo';

function App() {
   const todos = [
      new Todo('Learn React'),
      new Todo('Learn TypeScript')
   ];

   return (
      <div>
         <ToDos items={todos} />
      </div>
   );
};

export default App;