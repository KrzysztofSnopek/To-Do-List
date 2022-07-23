import styled from "styled-components";

export const StyledList = styled.ul`
            width: 500px;
            height: 52vh;
            min-height: 52vh;
            list-style: none;

        div {

            max-width: 380px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding-left: 8px;
            margin: 5px 5px;
        }

        li {
            background-color: #bcd0eb;
            width: 300px;
            max-width: 300px;
            height: 30px;
            box-shadow: 0px 0px 5px 2px #a2c1de;
            padding: 5px 0 5px 10px;
            display: flex;
            align-items: center;
            margin: 5px 0;
            max-width: 300px;
        }

        .delete-button {
            color: white;
            font-size: 20px;
            padding: 6px 0 0 0;
            background-color: transparent;
            box-shadow: none;
            border: none;
            margin-left: 5px;
            :hover {
                background: none;
	            background-color: none;                
            }
            cursor: pointer;
        }
`