import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 10rem;

    img{
        height: 2.5rem;
    }

    & > div {
        display: flex;

        & div{
            cursor: pointer;
        }
    }
`

export const HeaderLocation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.5rem;
    border-radius: 8px;

    background: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple']};
    
    span{
        color: ${props => props.theme['purple-dark']};

        font-size: 0.875rem;
    }
`

export const HeaderCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    border-radius: 8px;

    margin-left: 0.75rem;

    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};

    position: relative;
    `

export const QuantityInCart = styled.div`
    position: absolute;

    top: -15%;
    right: -15%;

    height: 1.25rem;
    width: 1.25rem;

    background: ${props => props.theme['yellow-dark']};
    color: ${props => props.theme['white']};

    border-radius: 50%;
    
    font-size: 0.75rem;
    font-weight: bold;
    text-align: center;
`