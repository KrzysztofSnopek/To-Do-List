import React, { useState, useEffect } from "react";

export function NewToDoForm(): JSX.Element {
    const [todos, setTodos] = useState<string[]>(['todo1']);
    const [activity, setActivity] = useState<string>('');

    useEffect(() => {
       const data = window.localStorage.getItem("my-todo-list");
            setTodos(JSON.parse)
    }, []);
    
    useEffect(() => {
        window.localStorage.setItem("my-todo-list", JSON.stringify(todos));
    });

    const handleSubmit = (activity: string) => {
        setTodos([...todos, activity]);
        setActivity('');        
    }

    const handleRemove = (index) => {
        setTodos([
            ...todos.slice(0, index),
            ...todos.slice(index + 1)
        ]);
    }

    return(
        <div>
            <form>
            <input
                type='text'
                onChange={e => setActivity(e.target.value)}
                value={activity}
            />
            <button
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
                    <li key={index}>
                        {todo}
                        <button
                            onClick={() => handleRemove(index)}
                        >
                            x
                        </button>
                    </li>
                )
            )}
            </ul>
        </div>
    )
}





