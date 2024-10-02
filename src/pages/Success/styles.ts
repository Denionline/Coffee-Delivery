import styled from "styled-components";


export const SuccessContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;

    & > div{
        margin-top: 5rem;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .Presentation{
            width: 100%;

            h2 {
                color: ${props => props.theme['yellow-dark']};
                
                font-family: 'Baloo 2', sans-serif;
                font-size: 2rem;
                margin-bottom: 0.5rem;
            }

            p{
                color: ${props => props.theme['base-subtitle']};

                font-size: 1.25rem;
            }
        }

        .Content{
            margin-top: 2.5rem;

            display: flex;
            align-items: center;
            gap: 6.375rem;
        }
    }
`

export const InfoOrder = styled.div`
    background: ${props => props.theme['background']};
    padding: 2.5rem;
    border-radius: 5px 35px 5px 35px;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    & > div{
        display: flex;
        align-items: center;
        gap: 0.75rem;

        & > div:first-child{
            border-radius: 50%;
            padding: 0.5rem;

            display: flex;
            align-items: center;
            justify-content: center;

            color: ${props => props.theme['white']};
        }

        .MapPinIcon{
            background: ${props => props.theme['purple']};
        }
        .TimerIcon{
            background: ${props => props.theme['yellow']};
        }
        .CurrencyDollarIcon{
            background: ${props => props.theme['yellow-dark']};
        }

        p{
            color: ${props => props.theme['base-text']};
        }

        .Bold{
            font-weight: bold;
        }
    }
`

export const JustGradient = styled.div`
    width: 32.875rem;
    padding: 1px;
    border-radius: 6px 36px 6px 36px;

    background: linear-gradient(300deg ,${props => props.theme['purple']}, ${props => props.theme['yellow']});
`