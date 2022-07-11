import React, { useState } from "react";

export function NewToDoForm(): JSX.Element {
    const [todos, setTodos] = useState<string[]>(['todo1']);
    const [activity, setActivity] = useState<string>('');

    const handleSubmit = (activity: string) => {
        setTodos([...todos, activity]);
        setActivity('');        
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
                    </li>
                )
            )}
            </ul>
        </div>
    )
}





