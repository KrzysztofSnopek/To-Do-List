import { useState, useEffect, useRef } from "react";
import { StyledForm} from "./styles/Form.styled";
import { StyledList } from "./styles/List.styled";
import { StyledPagination } from "./styles/Pagination.styled";
import { StyledHome } from "./styles/Home.styled";
import { TiDeleteOutline } from 'react-icons/ti';
import ReactPaginate from "react-paginate";

export function NewToDoForm(): JSX.Element {
    const cachedTodoList = JSON.parse(window.localStorage.getItem("my-todo-list") || "[]");
    const [todos, setTodos] = useState<string[]>([cachedTodoList || []]);
    const cachedCompletedTodoList = JSON.parse(window.localStorage.getItem("completed-todo-list") || "[]");
    const [completedTodos, setCompletedTodos] = useState<string[]>(cachedCompletedTodoList || []);
    const [activity, setActivity] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const todosPerPage = 6;
    const pagesVisited = pageNumber * todosPerPage;

    useEffect(() => {
       setTodos(cachedTodoList);
       setCompletedTodos(cachedCompletedTodoList);
    }, []);
    
    useEffect(() => {
        window.localStorage.setItem("my-todo-list", JSON.stringify(todos));
        window.localStorage.setItem("completed-todo-list", JSON.stringify(completedTodos));
    });

    const handleSubmit = (activity: string) => {
        if (activity.length >= 1) {
        setTodos([...todos, activity]);
        setActivity("");  
        }      
    }

    const handleRemove = (index: number) => {
        setTodos([
            ...todos.slice(0, index),
            ...todos.slice(index + 1)
        ]);
        const indexTodo = [...todos.slice(index, index + 1)];
        setCompletedTodos( completedTodos => [
            ...completedTodos, ...indexTodo
        ]);
    }

    const focusInput = () => {
        if (inputRef.current !== null) {
            inputRef.current.focus();
        }
    }

    const pageCount = Math.ceil(todos.length / todosPerPage);

    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    const changePage = ( {selected} ) => {
        setPageNumber(selected);
    };

    const handleKeyPress = (event: any) => {
        if (event.key === "Enter") {
            handleSubmit(activity);
            focusInput();
        }
    };

    return(
        <StyledHome>
            <StyledForm>
            <input className="form-input"
                ref={inputRef}
                type="text"
                onChange={e => setActivity(e.target.value)}
                value={activity}
                placeholder= "Add your new todo"
                maxLength={40}
                onKeyPress={(event) => {
                    handleKeyPress(event);
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
                Add task
            </button>
            </StyledForm>
            <StyledList>
                {
                    todos.slice(pagesVisited, pagesVisited + todosPerPage).map(
                        (todo, index) => {
                            return (
                            <div key={index}>
                            <li>
                                <p>
                                {todo}
                                </p>
                            </li>                        
                            <button className="delete-button"
                            onClick={() => handleRemove(index)}
                            >
                            <TiDeleteOutline />
                            </button>
                            </div>
                        )}
                    )
                }  
            </StyledList> 
            <StyledPagination>       
            <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Previous"}
                nextLabel={"Next"}
                containerClassName={"paginationButton"}
                nextLinkClassName={"nextButton"}
                previousLinkClassName={"previosButton"}
                activeClassName={"paginationActive"}
            />
            </StyledPagination>  
        </StyledHome>
    )
}





