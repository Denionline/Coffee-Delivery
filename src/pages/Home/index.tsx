import { HomeContainer } from "./styles"
import { Intro } from "./components/Intro"
import { CoffeeList } from "./components/CoffeeList"


export const Home = () => {
    return (
        <HomeContainer>
            <Intro />
            <CoffeeList />
        </HomeContainer>
    )
}
