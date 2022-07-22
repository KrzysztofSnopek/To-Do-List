import { createContext, useState } from "react";

export const FormContext = createContext();

export function FormProvider( {children} ) {
    const cachedCompletedTodoList = JSON.parse(window.localStorage.getItem("completed-todo-list") || "[]");
    const [completedTodos, setCompletedTodos] = useState(cachedCompletedTodoList || []);
    // const [todos, setTodos] = useState([]);

    // const addToCompleted = (index) => {
    //     const indexTodo = [...todos.slice(index, index + 1)];
    //     setCompletedTodos( completedTodos => [
    //         ...completedTodos, ...indexTodo
    //     ]);
    // }

    const value = {
        completedTodos,
        setCompletedTodos,
        cachedCompletedTodoList
    };

    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

export default FormContext;