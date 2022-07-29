import { useFormContext } from "./FormContext";
import { useEffect, useState } from "react";
import { StyledList } from "./styles/List.styled";
import { StyledHome } from "./styles/Home.styled";
import { StyledCompletedHeader } from "./styles/CompletedHeader.styled";
import { StyledPagination } from "./styles/Pagination.styled";
import ReactPaginate from "react-paginate";
import { TiDeleteOutline } from 'react-icons/ti';


export function Completed(): JSX.Element {
    const { setCompletedTodos, cachedCompletedTodoList } = useFormContext();
 
    const [pageNumber, setPageNumber] = useState<number>(0);
    const completedTodosPerPage = 6;
    const pagesVisited = pageNumber * completedTodosPerPage;
    const pageCount = Math.ceil(cachedCompletedTodoList.length / completedTodosPerPage);

    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    const changePage = ( {selected} ) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        setCompletedTodos([...cachedCompletedTodoList]);
     }, []);

    const handleRemoveCompleted = (index: number) => {
        cachedCompletedTodoList.splice(index, 1);
        window.localStorage.setItem("completed-todo-list", JSON.stringify(cachedCompletedTodoList));     
        setCompletedTodos([...cachedCompletedTodoList]);
    }
    
    return (
        <StyledHome>
            <StyledCompletedHeader>
                The list of your completed todos!
            </StyledCompletedHeader>
            <StyledList>
                {    
                cachedCompletedTodoList.slice(pagesVisited, pagesVisited + completedTodosPerPage).map(
                    (completedTodo: string, index: number) => {
                        return(
                            <div key={index}>
                                <li>
                                    {completedTodo}
                                </li>
                                <button 
                                    className="delete-button"
                                    onClick={() => handleRemoveCompleted(index)}
                                >
                                    <TiDeleteOutline />
                                </button>
                            </div>                        
                )}
                )}
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
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                breakLabel={'...'}
                renderOnZeroPageCount={() => null}
            />
            </StyledPagination>  
        </StyledHome>
    )
}
