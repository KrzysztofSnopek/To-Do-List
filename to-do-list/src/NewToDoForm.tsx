import React, { useState, useEffect, useRef } from "react";
import { StyledLayout } from "./styles/Layout.styled";
import { TiDeleteOutline } from 'react-icons/ti';
import ReactPaginate from "react-paginate";

export function NewToDoForm(): JSX.Element {
    const cachedTodoList = JSON.parse(window.localStorage.getItem("my-todo-list") || "[]");
    const [todos, setTodos] = useState<string[]>([cachedTodoList || []]);
    const [activity, setActivity] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const todosPerPage = 5;
    const pagesVisited = pageNumber * todosPerPage;

    useEffect(() => {
       setTodos(cachedTodoList);
    }, []);
    
    useEffect(() => {
        window.localStorage.setItem("my-todo-list", JSON.stringify(todos));
    });

    const handleSubmit = (activity: string) => {
        setTodos([...todos, activity]);
        setActivity("");        
    }

    const handleRemove = (index: number) => {
        setTodos([
            ...todos.slice(0, index),
            ...todos.slice(index + 1)
        ]);
    }

    const focusInput = () => {
        if (inputRef.current !== null) {
            inputRef.current.focus();
        }
    }

    const displayTodos = todos.slice(pagesVisited, pagesVisited + todosPerPage).map(
        (todo, index) => {
            return (
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
        )}
    );

    const pageCount = Math.ceil(todos.length / todosPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSubmit(activity);
        }
    };

    return(
        <StyledLayout>
            <form>
            <input className="form-input"
                ref={inputRef}
                type="text"
                onChange={e => setActivity(e.target.value)}
                value={activity}
                placeholder= "Add your new todo"
                maxLength={40}
                onKeyPress={(e) => {
                    handleKeyPress(e);
                    focusInput();
                }
                }
            />
            <button className="form-button"
                onClick={() =>
                    {
                        handleSubmit(activity);
                        focusInput();  
                    }
                }
                name="submit"
                type="button"
                id="task"
            >
                Add new task
            </button>
            </form>
            <ul>
                {displayTodos}

            </ul>
            <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Previous"}
                nextLabel={"Next"}
            />
        </StyledLayout>
    )
}





