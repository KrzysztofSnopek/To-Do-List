import { useFormContext } from "./FormContext";


export function Completed(): JSX.Element {
    const { completedTodos } = useFormContext();

    return (
        <h1>
            <ul>
                {    
                completedTodos.map(
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
