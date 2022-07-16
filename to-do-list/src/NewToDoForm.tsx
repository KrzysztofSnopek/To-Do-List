import React, { useState, useEffect } from "react";
import { StyledLayout } from "./styles/Layout.styled";
import { TiDeleteOutline } from 'react-icons/ti';

export function NewToDoForm(): JSX.Element {
    const [todos, setTodos] = useState<string[]>(["todo1"]);
    const [activity, setActivity] = useState<string>("");

    useEffect(() => {
       const data = window.localStorage.getItem("my-todo-list");
       const dataString: string = data || '[]';
       setTodos(JSON.parse(dataString));
    }, []);
    
    useEffect(() => {
        window.localStorage.setItem("my-todo-list", JSON.stringify(todos));
    });

    const handleSubmit = (activity: string) => {
        setTodos([...todos, activity]);
        setActivity("");        
    }

    const handleRemove = (index) => {
        setTodos([
            ...todos.slice(0, index),
            ...todos.slice(index + 1)
        ]);
    }

    return(
        <StyledLayout>
            <form>
            <input className="form-input"
                type="text"
                onChange={e => setActivity(e.target.value)}
                value={activity}
                placeholder= "Add your new todo"
                maxLength={40}
            />
            <button className="form-button"
                onClick={() =>
                    handleSubmit(activity)
                }
                name="submit"
                type="button"
                id="task"
            >
                Add new task
            </button>
            </form>
            <ul>
            {todos.map(
                (todo, index) => (
                    <div key={index}>
                    <li>
                        <p>
                        {todo}
                        </p>
                    </li>                        
                    <button className="form-button"
                    onClick={() => handleRemove(index)}
                    >
                    <TiDeleteOutline />
                    </button>
                    </div>
                )
            )}
            </ul>
        </StyledLayout>
    )
}





