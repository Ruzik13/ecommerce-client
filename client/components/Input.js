import styled from "styled-components"

const StyledInput = styled.input`
    width: 100%;
    padding: 4px;
    margin-bottom: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box; 
`;

export default function Input(props){
    return <StyledInput type="text" {...props}/>
}