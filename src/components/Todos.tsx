import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

const Todos: React.FC = () => {

    const todosCtx = useContext(TodosContext);

    const removeTodoHandler = (taskId: string) => {
        todosCtx.removeTodo(taskId);
    }

    return (<ul className={classes.todos}>
        {todosCtx.items.map((item, index) => {
            return <TodoItem key={`item-${item.id}`} item={item} onRemoveToDo={removeTodoHandler} />
        })}
    </ul>);
}

export default Todos;
