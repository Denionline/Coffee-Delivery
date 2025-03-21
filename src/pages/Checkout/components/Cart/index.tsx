import { useContext } from "react";
import { OrderContext } from "../../../../context/OrderContext";
import { CoffeeCard } from "../../../../components/CoffeeCard";
import { CartContainer, Total } from "./styles";

export const Cart = () => {
    const { order } = useContext(OrderContext);

    const totalValueCoffees = order.coffeesCart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.coffee.price * currentValue.quantity;
    }, 0);

    const deliveryValue = 3.50;
    const totalValue = totalValueCoffees + deliveryValue;

    return (
        <CartContainer>
            {order.coffeesCart.map(Coffee => {
                return (
                    <CoffeeCard 
                        key={Coffee.coffee.id}
                        coffee={Coffee.coffee}
                        quantityPassed={Coffee.quantity}
                        inCart={true}
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