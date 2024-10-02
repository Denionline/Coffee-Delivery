import { styled } from "styled-components"
import { Presentation } from "../../styles"

export const AddressContainer = styled.div`
    background: ${props => props.theme['base-card']};

    padding: 2.5rem;
    border-radius: 6px;
`

export const PresentationAddress = styled(Presentation)`
    .MapPinIcon{
        color: ${props => props.theme['yellow']};
    }
`

export const AddressInfoForm = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input{
        padding: 0.75rem;
        border-radius: 4px;

        background: ${props => props.theme['base-input']};
        box-shadow: inset 0 0 0 1px ${props => props.theme['base-button']};

        &::placeholder{
            color: ${props => props.theme['base-label']};;
        }
    }

    .CEP, .Numero, .Bairro {
        width: 12.5rem;
    }
    .Rua, .Complemento, .Cidade{
        width: 100%;
    }
    .UF{
        width: 3.75rem;
    }

    div{
        display: flex;
        gap: 1rem;        
    }

    .Complemento {
        background: ${props => props.theme['base-input']};
        box-shadow: inset 0 0 0 1px ${props => props.theme['base-button']};
        padding: 0.75rem;
        border-radius: 4px;

        input{
            width: 100%;
            padding: 0;
            border-radius: 0;
            background: ${props => props.theme['base-input']};
            box-shadow: none;
        }

        span{
            content: 'Opcional';
            top: 0;
            right: 0;
            font-size: 0.75rem;
            color: ${props => props.theme['base-label']};
        }
    }
`