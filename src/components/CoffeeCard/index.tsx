import { useContext, useState } from "react";
import { ShoppingCartSimple } from "@phosphor-icons/react"

import { Actions, BuyInfo, Cart, CoffeeCardContainer, CoffeeInCartContainer, InfoCoffeeInCart, Price, Tags } from "./styles";
import { ButtonQuantity } from "../ButtonQuantity";
import { OrderContext } from "../../context/OrderContext";
import { CoffeeType } from "../../context/Coffees";
import { ButtonRemove } from "../ButtonRemove";
import { CoffeesCartNewQuantityType } from "../../reducer/CoffeesCart/reducer";

interface CoffeeCardType{
    coffee: CoffeeType;
    quantityPassed: number;
    inCart: boolean;
    updateChangeToOrder: ({coffee, newQuantity}:CoffeesCartNewQuantityType) => void;
    actionRemoveCoffee: (coffee?: CoffeeType) => void;
}

export const CoffeeCard = ({ coffee, quantityPassed, inCart, updateChangeToOrder, actionRemoveCoffee }: CoffeeCardType) => {

    const { addCoffeeToCart } = useContext(OrderContext);

    const [quantity, setQuantity] = useState<number>(quantityPassed);

    function handleClickShoppingCart () {
        addCoffeeToCart({
            coffee,
            quantity
        })
        setQuantity(1);
    }

    function increaseQuantity () {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            if(inCart) updateChangeToOrder({coffee, newQuantity});
            return newQuantity;
        });
    }
    
    function decreaseQuantity () {
        setQuantity(prevQuantity => {
            if (prevQuantity === 1){
                if(inCart) actionRemoveCoffee(coffee);
                return prevQuantity;
            }else{
                const newQuantity = prevQuantity - 1;
                if(inCart) updateChangeToOrder({coffee, newQuantity});
                return newQuantity;
            }
        });
    }

    const totalPriceSelectedCoffee = coffee.price * quantity;

    return (
        <>
            {inCart ? (
                <CoffeeInCartContainer>
                    <InfoCoffeeInCart>
                        <div>
                            <img src={coffee.img} alt="" />
                            <div>
                                <p>{coffee.name}</p>
                                <div>
                                    <ButtonQuantity 
                                        quantity={quantity}
                                        increaseQuantity={increaseQuantity}
                                        decreaseQuantity={decreaseQuantity}
                                     />
                                    <ButtonRemove 
                                        coffee={coffee}
                                        actionRemoveCoffee={actionRemoveCoffee} 
                                    />
                                </div>
                            </div>
                        </div>
                        <span>
                            {
                                new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(totalPriceSelectedCoffee)
                            }
                        </span>
                    </InfoCoffeeInCart>
                </CoffeeInCartContainer>
            ) : (
                <CoffeeCardContainer>
                    <img src={coffee.img} alt="" />
                    <Tags>
                        {coffee.types?.map(type => {
                            return (
                                <span key={type}>{type}</span>
                            )
                        })}
                    </Tags>
                    <h3>{coffee.name}</h3>
                    <p>{coffee.description}</p>
                    <BuyInfo>  
                        <Price>
                            <span>R$</span>
                            <p>
                                {
                                    new Intl.NumberFormat('pt-BR', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    }).format(coffee.price)
                                }
                            </p>
                        </Price>
                        <Actions>
                            <ButtonQuantity 
                                quantity={quantity}
                                increaseQuantity={increaseQuantity}
                                decreaseQuantity={decreaseQuantity}
                            />
                            <Cart onClick={handleClickShoppingCart}>
                                <ShoppingCartSimple size={22} weight="fill"/>
                            </Cart>
                        </Actions>
                    </BuyInfo>
                </CoffeeCardContainer>
            )}
    </>
    )
}