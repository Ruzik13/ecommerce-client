import {styled, css} from "styled-components"

const StyledButton = styled.button`
    border: none;
    border-radius: 8px;
    padding: 8px 12px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    svg{
        height: 20px;
        margin-left: 4px;    
    }
    

    ${props => props.primary && css`
        background-color: #FF00B7;
        color: #fff;
        border: 1px solid #FF00B7;
        `};
    ${props => props.white && !props.outline && css`
        background-color: #fff;
        color:  #FF00B7;
        `};
    
    ${props => props.white && props.outline && css`
        background-color: transparent;
        color:  #fff;
        border: 1px solid #fff;
        `};
    
    ${props => props.size === 'l' && css`
        font-size: 1.2rem;
        padding: 12px 16px;
        `}
`;

export default function Button({children, ...rest}){
    return(
        <StyledButton {...rest}>{children}</StyledButton>
    )
}