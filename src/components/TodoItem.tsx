import React from "react";
import Todo from "../models/todo";
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{item: Todo; onRemoveToDo: (item: string) => void}> = (props) => {
    return (<li className={classes.item} key={`index-${props.item.id}`} onClick={() => props.onRemoveToDo(props.item.id)} >{props.item.text}</li>);
}

export default TodoItem;
