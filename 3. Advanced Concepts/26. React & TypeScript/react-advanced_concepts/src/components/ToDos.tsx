import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './ToDos.module.css';

const ToDos: React.FC<{items: Todo[]}> = (props) => {
   return(
      <ul className={classes.todos}>
         {props.items.map((item) => (
            <TodoItem key={item.id} text={item.text} />
         ))}
      </ul>
   );
};

export default ToDos;