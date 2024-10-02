import styled from "styled-components";

export const CoffeeListContainer = styled.main`
    width: 100%;
    padding: 3.375rem 10rem;

    h2{
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
        line-height: 130%;
        color: ${props => props.theme['base-subtitle']};

        margin-bottom: 3.375rem;
    }   
`

export const ListContainer = styled.div`
    width: auto;
    display: flex;
    align-items: flex-st art;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 2rem;
`