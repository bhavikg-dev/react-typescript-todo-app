import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {

    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const todosCtx = useContext(TodosContext);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            return;
        }
        todosCtx.addTodo(enteredText);
    }

    return (<form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="todo-text">Enter Todo Task</label>
        <input type="text" id="todo-text" ref={todoTextInputRef} />
        <button>Add Todo</button>
    </form>);
}

export default NewTodo;