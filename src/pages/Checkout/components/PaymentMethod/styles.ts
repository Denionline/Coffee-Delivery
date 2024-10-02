import styled from "styled-components";
import { Presentation } from "../../styles";


export const PaymentMethodContainer = styled.div`
    background: ${props => props.theme['base-card']};

    padding: 2.5rem;
    margin-top: 0.75rem;
    border-radius: 6px;
`

export const PresentationPaymentMethod = styled(Presentation)`
    .CurrencyDollarIcon{
        color: ${props => props.theme['purple']};
    }
`

export const Methods = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    gap: 0.75rem;

    label{
        display: flex;
        align-items: center;
        justify-content: start;

        user-select: none;

        gap: 0.75rem;
        padding: 1rem;
        border-radius: 6px;

        border: 1px solid transparent;
        background: ${props => props.theme['base-button']};

        width: 100%;

        cursor: pointer;

        .Icon{
            color: ${props => props.theme['purple']};
        }

        span{
            color: ${props => props.theme['base-text']};
            text-transform: uppercase;
            font-size: 0.75rem;
        }

        &:hover{
            background: ${props => props.theme['base-hover']};
        }
        &:active{
            border: 1px solid ${props => props.theme['purple']};
        }


        input[type="radio"]{
            display: none;
        } 

        
    }

    .selected {
        border: 1px solid ${props => props.theme['purple']};
    }
`

