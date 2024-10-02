import { useContext } from "react";
import { OrderContext } from "../../../../context/OrderContext";
import { CoffeeCard } from "../../../../components/CoffeeCard";
import { CoffeeType } from "../../../../context/Coffees";
import { CartContainer, Total } from "./styles";

interface UpdateChangeToOrderType{
    coffee: CoffeeType;
    newQuantity: number;
}

export const Cart = () => {
    const { order, changeCoffeeInOrder, removeCoffeeInCart } = useContext(OrderContext);

    const totalValueCoffees = order.coffeesCart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.coffee.price * currentValue.quantity;
    }, 0);

    const deliveryValue = 3.50;
    const totalValue = totalValueCoffees + deliveryValue;


    function updateChangeToOrder ({coffee, newQuantity}: UpdateChangeToOrderType) {
        const quantity = newQuantity;
        changeCoffeeInOrder({coffee, quantity});
    }

    function actionRemoveCoffee (coffee?: CoffeeType) {
        if(coffee) removeCoffeeInCart(coffee.id);
    }

    return (
        <CartContainer>
            {order.coffeesCart.map(Coffee => {
                return (
                    <CoffeeCard 
                        key={Coffee.coffee.id}
                        coffee={Coffee.coffee}
                        quantityPassed={Coffee.quantity}
                        inCart={true}
                        updateChangeToOrder={updateChangeToOrder}
                        actionRemoveCoffee={actionRemoveCoffee}
                    />
                )
            })}

            <Total>
                <div className="OthersTotal">
                    <span>Total de itens</span>
                    <span>
                        {                        
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(totalValueCoffees)                        
                        }
                    </span>
                </div>
                <div className="OthersTotal">
                    <span>Entrega</span>
                    <span>
                        {                        
                            new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(deliveryValue)
                        }
                        </span>
                </div>
                <div className="TotalValue">
                    <span>Total</span>
                    <span>
                        {
                            new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(totalValue)
                        }
                    </span>
                </div>
            </Total>
        </CartContainer>
    )
}