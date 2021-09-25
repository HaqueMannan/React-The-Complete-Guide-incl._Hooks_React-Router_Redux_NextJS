// WITHOUT CONTEXT API:
// import Todo from '../models/todo';
// import TodoItem from './TodoItem';
// import classes from './ToDos.module.css';

// const ToDos: React.FC<{ items: Todo[], onRemoveTodo: (id: string) => void }> = (props) => {
//    return(
//       <ul className={classes.todos}>
//          {props.items.map((item) => (
//             <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
//          ))}
//       </ul>
//    );
// };

// WITH CONTEXT API:
import { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';
import classes from './ToDos.module.css';

const ToDos: React.FC = () => {
   const todosCtx = useContext(TodosContext);

   return(
      <ul className={classes.todos}>
         {todosCtx.items.map((item) => (
            <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />
         ))}
      </ul>
   );
};

export default ToDos;