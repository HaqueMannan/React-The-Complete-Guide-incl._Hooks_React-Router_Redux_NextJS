import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './ToDos.module.css';

const ToDos: React.FC<{ items: Todo[], onRemoveTodo: (id: string) => void }> = (props) => {
   return(
      <ul className={classes.todos}>
         {props.items.map((item) => (
            <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
         ))}
      </ul>
   );
};

export default ToDos;