// WITHOUT CONTEXT API:
// import { useRef } from 'react';
// import classes from './NewTodo.module.css';

// const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
//    const todoTextInputRef = useRef<HTMLInputElement>(null);

//    const submitHandler = (event: React.FormEvent) => {
//       event.preventDefault();

//       const enteredText = todoTextInputRef.current!.value;

//       if(enteredText.trim().length === 0) {
//          // throw and error
//          return;
//       };

//       props.onAddTodo(enteredText);
//    };

//    return(
//       <form onSubmit={submitHandler} className={classes.form}>
//          <label htmlFor="text">Todo Text</label>
//          <input id="text" type="text" ref={todoTextInputRef} />
//          <button>Add Todo</button>
//       </form>
//    );
// };

// WITH CONTEXT API:
import { useRef, useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
   const todosCtx = useContext(TodosContext);

   const todoTextInputRef = useRef<HTMLInputElement>(null);

   const submitHandler = (event: React.FormEvent) => {
      event.preventDefault();

      const enteredText = todoTextInputRef.current!.value;

      if(enteredText.trim().length === 0) {
         // throw and error
         return;
      };

      todosCtx.addTodo(enteredText);
   };

   return(
      <form onSubmit={submitHandler} className={classes.form}>
         <label htmlFor="text">Todo Text</label>
         <input id="text" type="text" ref={todoTextInputRef} />
         <button>Add Todo</button>
      </form>
   );
};

export default NewTodo;