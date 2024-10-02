import styled from "styled-components";


export const ButtonRemoveContainer = styled.div`
    background: ${props => props.theme['base-button']};

    display: flex;
    align-items: center;
    gap: 0.25rem;

    height: 2rem;
    padding: 0 0.5rem;
    border-radius: 6px;

    cursor: pointer;

    .Icon{
        color: ${props => props.theme['purple']};
    }
    span{
        font-size: 0.75rem;
        color: ${props => props.theme['base-text']};
    }

    transition: all .1s;

    &:hover {
        background: ${props => props.theme['base-hover']};

        .Icon{
            color: ${props => props.theme['purple-dark']};
        }
        span{
            color: ${props => props.theme['base-subtitle']};
        }
    }
`