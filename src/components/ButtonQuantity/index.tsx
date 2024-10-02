import { Minus, Plus } from "@phosphor-icons/react"
import { ButtonQuantityContainer } from "./styles"

interface ButtonQuantityType {
    quantity: number;
    increaseQuantity: () => void;
    decreaseQuantity: () => void
}

export const ButtonQuantity = ({quantity, increaseQuantity, decreaseQuantity}:ButtonQuantityType) => {

    function handleClickIncreaseQuantity () {
        increaseQuantity();
    }
    function handleClickDecreaseQuantity () {
        decreaseQuantity();
    }

    return (
        <ButtonQuantityContainer>
            <Minus 
                className="Action" 
                size={14} 
                weight="bold"
                onClick={handleClickDecreaseQuantity}
            />
            <span>{quantity}</span>
            <Plus 
                className="Action" 
                size={14} 
                weight="bold"
                onClick={handleClickIncreaseQuantity}
            />
        </ButtonQuantityContainer>
    )
}