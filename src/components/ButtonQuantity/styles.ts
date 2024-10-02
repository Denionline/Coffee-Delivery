import styled from "styled-components";

export const ButtonQuantityContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;

    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 8px;

    background: ${props => props.theme['base-button']};

    span{
        color: ${props => props.theme['base-title']};
        font-size: 1rem;
    }

    .Action{
        color: ${props => props.theme['purple']};
        cursor: pointer;
        transition: color 0.1s;
    }
    .Action:hover{
        color: ${props => props.theme['purple-dark']};
    }
`