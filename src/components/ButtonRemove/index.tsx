import { Trash } from "@phosphor-icons/react"
import { ButtonRemoveContainer } from "./styles"
import { CoffeeType } from "../../context/Coffees";

interface ButtonRemoveType{
    coffee: CoffeeType;
    actionRemoveCoffee: (coffee?: CoffeeType) => void;
}

export const ButtonRemove = ({coffee, actionRemoveCoffee}:ButtonRemoveType) => {

    function handleClickRemove () {
        actionRemoveCoffee(coffee);
    }

    return (
        <ButtonRemoveContainer onClick={handleClickRemove}>
            <Trash className="Icon" size={16} />
            <span>Remover</span>
        </ButtonRemoveContainer>
    )
}