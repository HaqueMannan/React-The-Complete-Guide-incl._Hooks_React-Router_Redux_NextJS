import { useState } from 'react';
import ToDos from './components/ToDos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
   const [todos, setTodos] = useState<Todo[]>([]);

   const addTodoHandler = (todoText: string) => {
      const newTodo = new Todo(todoText);

      setTodos((prevTodos) => {
         return prevTodos.concat(newTodo);
      });
   };

   return (
      <div>
         <NewTodo onAddTodo={addTodoHandler} />
         <ToDos items={todos} />
      </div>
   );
};

export default App;