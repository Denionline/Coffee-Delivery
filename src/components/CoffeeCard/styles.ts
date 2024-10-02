import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    background: ${props => props.theme['base-card']};
    width: 16rem;
    height: 19.375rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    padding: 0 1.25rem;
    border-radius: 6px 36px 6px 36px;

    img{
        margin-top: -1.25rem;
        height: 7.5rem;
    }

    h3{
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.25rem;
        font-weight: bold;
        color: ${props => props.theme['base-subtitle']};
        margin: 0.5rem 0;
    }
    & > p{
        font-size: 0.875rem;
        color: ${props => props.theme['base-label']};
        text-align: center;
    }
`

export const Tags = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    width: 100%;
    margin: 0.75rem 0;
    
    span{
        font-size: 0.625rem;
        font-weight: bold;
        text-transform: uppercase;
        
        border-radius: 8px;
        padding: 0 0.5rem;

        color: ${props => props.theme['yellow-dark']};
        background: ${props => props.theme['yellow-light']};
    }
`
export const BuyInfo = styled.div`
    margin-top: 2.0625rem;

    display: flex;
    gap: 1.4375rem;
`

export const Price = styled.div`
    display: flex;
    align-items: center;
    color: ${props => props.theme['base-text']};

    span{
        font-size: 0.875rem;
    }
    p{
        margin-left: 0.25rem;
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.5rem;
        font-weight: bold;
    }
`

export const Actions = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const Cart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${props => props.theme['purple-dark']};
    color: ${props => props.theme['white']};

    padding: 0.5rem;
    border-radius: 8px;
    transition: background 0.1s;

    cursor: pointer;

    &:hover{
        background: ${props => props.theme['purple']};
    }
`

export const CoffeeInCartContainer = styled.div`
    padding: 1.5rem 0;

    &:first-child{
        padding-top: 0;
    }

    border-bottom: 1px solid ${props => props.theme['base-button']};;
`

export const InfoCoffeeInCart = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;

    background: ${props => props.theme['base-card']};

    padding: 0.5rem 0.25rem;

    img{
        height: 4rem;
    }

    & > span{
        font-size: 1rem;
        font-weight: bold;
        color: ${props => props.theme['base-text']};
    }

    & > div{
        display: flex;
        gap: 1.25rem;

        p{
            font-size: 1rem;
            color: ${props => props.theme['base-subtitle']};
        }

        & > div{
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            & > div{
                display: flex;
                gap: 0.5rem;
                
                div{
                    height: 2rem;
                }
            }
        }
    }
`