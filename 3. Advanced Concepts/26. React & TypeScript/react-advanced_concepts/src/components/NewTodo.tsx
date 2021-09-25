import { useRef } from 'react';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
   const todoTextInputRef = useRef<HTMLInputElement>(null);

   const submitHandler = (event: React.FormEvent) => {
      event.preventDefault();

      const enteredText = todoTextInputRef.current!.value;

      if(enteredText.trim().length === 0) {
         // throw and error
         return;
      };

      props.onAddTodo(enteredText);
   };

   return(
      <form onSubmit={submitHandler}>
         <label htmlFor="text">Todo Text</label>
         <input id="text" type="text" ref={todoTextInputRef} />
         <button>Add Todo</button>
      </form>
   );
};

export default NewTodo;