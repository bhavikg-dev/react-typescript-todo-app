import React,{ useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC = (props) => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
      const newTodo = new Todo(todoText);
      setTodos((prevTodos) => {
        return prevTodos.concat(newTodo);
      });
    }
  
    const removeTodoHandler = (taskId: string) => {
      /*
      let index = -1;
      if (todos.length > 0) {
          index = todos.findIndex((item) => item['id'] === taskId);
      }
      const updatedTodos = [
        ...todos.slice(0,index),
        ...todos.slice(index+1)
      ];
      setTodos((prevTodos) => {
        return updatedTodos;
      });
      */
  
      setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.id !== taskId);
      });
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
};

export default TodosContextProvider;