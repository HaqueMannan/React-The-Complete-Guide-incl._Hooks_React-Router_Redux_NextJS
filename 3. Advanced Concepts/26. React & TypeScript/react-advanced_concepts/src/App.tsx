// WITHOUT CONTEXT API:
// import { useState } from 'react';
// import NewTodo from './components/NewTodo';
// import ToDos from './components/ToDos';
// import Todo from './models/todo';

// function App() {
//    const [todos, setTodos] = useState<Todo[]>([]);

//    const addTodoHandler = (todoText: string) => {
//       const newTodo = new Todo(todoText);

//       setTodos((prevTodos) => {
//          return prevTodos.concat(newTodo);
//       });
//    };

//    const removeTodoHandler = (todoId: string) => {
//       setTodos((prevTodos) => {
//          return prevTodos.filter(todo => todo.id !== todoId);
//       });
//    };

//    return (
//       <div>
//          <NewTodo onAddTodo={addTodoHandler} />
//          <ToDos items={todos} onRemoveTodo={removeTodoHandler}/>
//       </div>
//    );
// };

// WITH CONTEXT API:
import NewTodo from './components/NewTodo';
import ToDos from './components/ToDos';
import TodosContextProvider from './store/todos-context';

function App() {
   return (
      <TodosContextProvider>
         <NewTodo />
         <ToDos />
      </TodosContextProvider>
   );
};

export default App;