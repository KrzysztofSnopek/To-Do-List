import styled from "styled-components";

export const StyledForm = styled.form`
            padding: 20px 20px;
            margin-left: 32px;
            width: 500px;
            height: 20px;

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
`