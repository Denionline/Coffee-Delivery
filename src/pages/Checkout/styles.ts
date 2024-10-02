import styled from "styled-components";

export const CheckoutContainer = styled.div`
    form{
        width: 100%;

        display: flex;
        align-items: start;
        justify-content: center;

        gap: 2rem;
        margin: 2.5rem 0;

        h2{
            margin-bottom: 0.9375rem;
            font-size: 1.125rem;
            color: ${props => props.theme['base-subtitle']};
            text-align: start;
        }
    }
`

export const Presentation = styled.div`
    display: flex;
    margin-bottom: 2rem;

    div{
        margin-left: 0.5rem;
        h3{
            font-size: 1rem;
            color: ${props => props.theme['base-subtitle']};;
        }
        p{
            font-size: 0.875rem;
            color: ${props => props.theme['base-text']};;
        }
    }
`

export const InfoAddressAndPay = styled.div`
    display: flex;
    flex-direction: column;
    width: 40rem;
`

export const InfoSelectedCoffees = styled.div`
    width: 28rem;
`
export const ButtonConfirmOrder = styled.input`
    width: 100%;
    padding: 0.75rem 0.5rem;

    cursor: pointer;
    border-radius: 6px;

    background: ${props => props.theme['yellow']};
    color: ${props => props.theme['white']};
    
    transition: all .1s;

    &:hover{
        background: ${props => props.theme['yellow-dark']};
    }
`
