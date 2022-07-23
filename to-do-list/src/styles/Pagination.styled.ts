import styled from "styled-components";

export const StyledPagination = styled.div`
        .paginationButton {
            width: 80%;
            height: 30px;
            list-style: none;
            display: flex;
            justify-content: center;
            
            }

        .paginationButton a {
            padding: 10px;
            margin: 8px;
            border-radius: 5px;
            border: 1px solid #3d78bf;
            color: #3d78bf;
            cursor: pointer;
        }

        .paginationButton a:hover {
            color: white;
            background-color: #5889c4;
        }

        .paginationActive a {
            color: white;
            background-color: #5889c4;
        }
`