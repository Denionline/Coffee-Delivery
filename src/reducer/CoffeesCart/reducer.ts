import { CoffeeType } from "../../context/Coffees";
import { ActionTypes } from "./actions";
import { produce } from 'immer'

export interface OrderType{
    coffeesCart: CoffeesCartType[];
    address?: {
        cep: number;
        street: string;
        number: string;
        complement: string;
        district: string;
        city: string;
        uf: string;
    };
    methodPayment?: string;
}

export interface CoffeesCartType {
    coffee: CoffeeType;
    quantity: number;
}

export interface CoffeesCartNewQuantityType {
    coffee: CoffeeType;
    newQuantity: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const coffeesReducer = (state:OrderType, action:any) => {
    switch(action.type){
        case ActionTypes.ADD_COFFEE_TO_CART:{
            return produce(state, draft => {
                const indexCoffeeAlreadyInCart = state.coffeesCart.findIndex(currentCoffee => {
                    return currentCoffee.coffee.id === action.payload.coffeeCart.coffee.id;
                });
                if(indexCoffeeAlreadyInCart >= 0){
                    const newQuantity = draft.coffeesCart[indexCoffeeAlreadyInCart].quantity + action.payload.coffeeCart.quantity;
                    draft.coffeesCart[indexCoffeeAlreadyInCart].quantity = newQuantity;
                }else{
                    draft.coffeesCart.push(action.payload.coffeeCart);
                }
            })
        }
        case ActionTypes.CHANGE_COFFEE_IN_ORDER:{
            return produce(state, draft => {
                const indexCoffeeToChange = draft.coffeesCart.findIndex(currentCoffee => currentCoffee.coffee.id === action.payload.coffee.id);
                draft.coffeesCart[indexCoffeeToChange].quantity = action.payload.quantity;
            })
        }
        case ActionTypes.REMOVE_COFFEE_IN_CART: {
            return produce(state, draft => {
                const indexCoffeeToRemove = draft.coffeesCart.findIndex(currentCoffee => currentCoffee.coffee.id === action.payload.id);
                draft.coffeesCart.splice(indexCoffeeToRemove, 1);
            })
        }
        case ActionTypes.SAVE_ADDRESS_ON_ORDER:
            return produce(state, draft => {
                draft.address = {
                    cep: action.payload.data.CEP,
                    street: action.payload.data.Rua || "",
                    number: action.payload.data.Numero || "",
                    complement: action.payload.data.Complemento || "",
                    district: action.payload.data.Bairro || "",
                    city: action.payload.data.Cidade || "",
                    uf: action.payload.data.UF || "",
                }
                draft.methodPayment = action.payload.data.PaymentMethod
            })
        default:
            return state
    }
    
}