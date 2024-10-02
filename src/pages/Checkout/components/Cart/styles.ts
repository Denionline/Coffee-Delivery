import styled from "styled-components";

export const CartContainer = styled.div`
    background: ${props => props.theme['base-card']};

    padding: 2.5rem;
    border-radius: 6px 44px 6px 44px;
`

export const Total = styled.div`
    margin: 1.5rem 0;
    
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .OthersTotal{
        span{
            color: ${props => props.theme['base-text']};

            font-size: 0.875rem;
        }
    }

    .TotalValue{
        color: ${props => props.theme['base-subtitle']};

        font-size: 1.25rem;
        font-weight: bold;
    }
`