import React from "react";

import { useState } from "react";

interface FormContextValue {
    completedTodos: string[];
    setCompletedTodos: React.Dispatch<any>;
    cachedCompletedTodoList: string[];
}

interface Props {
    children: React.ReactNode;
}

export const FormContext = React.createContext<FormContextValue | null>(null);

export function FormProvider(props: Props): JSX.Element {
    const cachedCompletedTodoList = JSON.parse(window.localStorage.getItem("completed-todo-list") || "[]");
    const [completedTodos, setCompletedTodos] = useState(cachedCompletedTodoList || []);

    return(
        <FormContext.Provider value={{ completedTodos, setCompletedTodos, cachedCompletedTodoList }}>
            {props.children}
        </FormContext.Provider>
    );
}

export function useFormContext(): FormContextValue {
    const contextValue = React.useContext(FormContext)
    if (contextValue === null) {
        throw new Error('useFormContext must be used within <FormContextProvider />.')
    }
    return contextValue;
}