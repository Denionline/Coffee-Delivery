import styled from "styled-components"

export const IntroContainer = styled.main`
    display: flex;
    padding: 5.75rem 10rem;

    h1{
        font-family: "Baloo 2", sans-serif;
        font-size: 3rem;
        line-height: 130%;
        font-weight: bolder;
        color: ${props => props.theme['base-title']};
    }
    p{
        margin-top: 0.25rem;
        font-size: 1.25rem;
        color: ${props => props.theme['base-subtitle']};
        line-height: 130%;
    }

    & > img{
        margin-left: 3.5rem;
    }
`

export const IntroItemns = styled.div`
    margin-top: 4.125rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
`

export const IntroItem = styled.div`
    display: flex;
    align-items: center;

    div{
        background: ${props => props.theme['yellow-dark']};
        color: ${props => props.theme['white']};

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        height: 2rem;
        width: 2rem;        
    }
    
    span{
        margin-left: 0.75rem;

        font-size: 1rem;
        color: ${props => props.theme['base-text']};
    }
`
export const ShoppingCartItem = styled(IntroItem)`
    div{
        background: ${props => props.theme['yellow-dark']};
    }
`
export const PackageItem = styled(IntroItem)`
    div{
        background: ${props => props.theme['base-text']};
    }
`
export const TimerItem = styled(IntroItem)`
    div{
        background: ${props => props.theme['yellow']};
    }
`
export const CoffeeItem = styled(IntroItem)`
    div{
        background: ${props => props.theme['purple']};
    }
`