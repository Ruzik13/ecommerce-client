import styled from "styled-components";

const StyledTable = styled.table`
    width: 100%;
    th{
        text-align: left;
        text-transform: uppercase;
        color: #aaa;
        font-weight: 600;
        font-size: .8rem;
    }
    td{
      border-top: 1px solid rgba(255,255,255, .1);
    }
`;

export default function Table(props){
    return <StyledTable {...props}/>
}