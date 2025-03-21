import { Trash } from "@phosphor-icons/react"
import { ButtonRemoveContainer } from "./styles"
import { CoffeeType } from "../../context/Coffees";
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

interface ButtonRemoveType{
    coffee: CoffeeType;
}

export const ButtonRemove = ({coffee}:ButtonRemoveType) => {
    const { removeCoffeeInCart } = useContext(OrderContext);

    function handleClickRemove () {
        removeCoffeeInCart(coffee);
    }

    return (
        <ButtonRemoveContainer onClick={handleClickRemove}>
            <Trash className="Icon" size={16} />
            <span>Remover</span>
        </ButtonRemoveContainer>
    )
}