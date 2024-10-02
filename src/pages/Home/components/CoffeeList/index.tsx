import { CoffeeCard } from "../../../../components/CoffeeCard";
import { CoffeeListContainer, ListContainer } from "./styles";
import { CoffeesAPI } from "../../../../context/Coffees";

export const CoffeeList = () => {
  
  return (
    <CoffeeListContainer>

      <h2>Nossos Cafés</h2>

      <ListContainer>

        {CoffeesAPI.map((currentCoffeeAPI) => {
          return (
            <CoffeeCard
              key={currentCoffeeAPI.id}
              coffee={currentCoffeeAPI}
              quantityPassed={1}
              inCart={false}
            />
          );
        })}
      </ListContainer>

    </CoffeeListContainer>
  );
};
