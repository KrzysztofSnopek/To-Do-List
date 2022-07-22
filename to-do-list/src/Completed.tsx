import React from "react";
import FormContext from "./FormContext";
import { useContext } from "react";
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore


function Completed(): JSX.Element {
    const { completedTodos } = useContext(FormContext);


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


export default Completed;