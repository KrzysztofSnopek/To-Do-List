import styled from "styled-components";

export const StyledLayout = styled.div`
        background-color: rgba(170, 196, 230);
        box-shadow: 5px 11px 44px 13px rgba(26, 185, 235, 1);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 500px;

        form {
            padding: 20px 20px;
            width: 500px;
            height: 20px;
        }

        .form-input {
            width: 250px;
            padding: 4px 0;
        }

        .form-button {
            margin-left: 60px;
            box-shadow:inset 0px 1px 0px 0px #a2c1de;
	        background-color:#79bbff;
	        border-radius:6px;
	        border:1px solid #84bbf3;
	        cursor: pointer;
	        color:#ffffff;
	        font-weight:bold;
	        padding:6px 24px;
	        text-decoration:none;
	        text-shadow:0px 1px 0px #528ecc;
            :hover {
                background: #378de5;
	            background-color:#378de5;
            }
        }

        ul {
            width: 500px;
            height: 52vh;
            min-height: 50vh;
            list-style: none;
        }

        ul div {
            width: 380px;
            max-width: 380px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding-left: 8px;
            color: #555555;
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

        p li {
            width: 250px;
            max-width: 250px;
        }

        div button.form-button {
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
        }
`