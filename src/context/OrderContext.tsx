import { createContext, ReactNode, useEffect, useReducer } from "react";
import { CoffeesCartType, coffeesReducer, OrderType } from "../reducer/CoffeesCart/reducer";
import { NewCycleFormData } from "../pages/Checkout";
import { addCoffeeToCartAction, changeCoffeeInOrderAction, removeCoffeeInCartAction, saveAddressOnOrderAction } from "../reducer/CoffeesCart/actions";

export interface OrderContextType {
    order: OrderType;
    addCoffeeToCart: (Coffee: CoffeesCartType) => void;
    changeCoffeeInOrder: ({coffee, quantity}:CoffeesCartType) => void;
    removeCoffeeInCart: (id: number) => void;
    saveAddressOnOrder: (data: NewCycleFormData) => void;
}

export const OrderContext = createContext({} as OrderContextType);

interface CyclesContextProviderProps {
    children: ReactNode;
}

export const OrderContextProvider = ({ children }:CyclesContextProviderProps) => {
    
    const [order, dispath] = useReducer(
        coffeesReducer,{
            coffeesCart: [],
        },(initialState) => {
            const orderOnLocalStorage = localStorage.getItem('@CoffeeDelivery-1.0');

            if(orderOnLocalStorage){
                return JSON.parse(orderOnLocalStorage);
            }

            return initialState;
        }
    );

    useEffect(() => {
        localStorage.setItem('@CoffeeDelivery-1.0', JSON.stringify(order));
    }, [order])

    function addCoffeeToCart (coffeeCart: CoffeesCartType) {
        dispath(addCoffeeToCartAction(coffeeCart));
    }

    function changeCoffeeInOrder ({coffee, quantity}:CoffeesCartType) {
        dispath(changeCoffeeInOrderAction({coffee, quantity}));
    }

    function removeCoffeeInCart (id: number) {
        dispath(removeCoffeeInCartAction(id));
    }

    function saveAddressOnOrder (data:NewCycleFormData) {
        dispath(saveAddressOnOrderAction(data))
    }

    return (
        <OrderContext.Provider
            value={{
                order,
                saveAddressOnOrder,
                addCoffeeToCart,
                changeCoffeeInOrder,
                removeCoffeeInCart
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}