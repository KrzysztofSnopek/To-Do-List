import { useFormContext } from "./FormContext";
import { useEffect } from "react";


export function Completed(): JSX.Element {
    const { setCompletedTodos, cachedCompletedTodoList } = useFormContext();
    
    useEffect(() => {
       setCompletedTodos({...cachedCompletedTodoList})
     }, []);

    return (
        <h1>
            <ul>
                {    
                cachedCompletedTodoList.map(
                    (completedTodo: string, index: number) => {
                        return(
                        <li key={index}>
                            {completedTodo}
                        </li>
                        
                )}
                )}
            </ul>
        </h1>
    )
}
