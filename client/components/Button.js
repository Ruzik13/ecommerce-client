import { styled, css } from "styled-components";

export const ButtonStyle = css`
    border: none;
    text-decoration: none;
    border-radius: 8px;
    padding: 8px 12px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    svg{
        height: 16px;
        margin-left: 4px;    
    }
    
    ${props => props.block && css`
        display:block;
        width: 100%;
        `};

    ${props => props.primary && !props.outline && css`
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
        svg{
            height: 20px;
            }
        `}
    ${props => props.primary && props.outline && css`
        background-color: transparent;
        color: #FF00B7;
        border: 1px solid #FF00B7;
        `};
`;

const StyledButton = styled.button`
    ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
    return (
        <StyledButton {...rest}>{children}</StyledButton>
    )
}