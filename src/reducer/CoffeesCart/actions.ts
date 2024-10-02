import { NewCycleFormData } from "../../pages/Checkout"
import { CoffeesCartType } from "./reducer"

export enum ActionTypes {
    ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
    CHANGE_COFFEE_IN_ORDER = 'CHANGE_COFFEE_IN_ORDER',
    REMOVE_COFFEE_IN_CART = 'REMOVE_COFFEE_IN_CART',
    SAVE_ADDRESS_ON_ORDER = 'SAVE_ADDRESS_ON_ORDER'
}

export const addCoffeeToCartAction = (coffeeCart: CoffeesCartType) => {
    return {
        type: ActionTypes.ADD_COFFEE_TO_CART,
        payload: {
            coffeeCart
        }
    }
}

export const changeCoffeeInOrderAction = ({coffee, quantity}:CoffeesCartType) => {
    return {
        type: ActionTypes.CHANGE_COFFEE_IN_ORDER,
        payload: {
            coffee,
            quantity
        }
    }
}

export const removeCoffeeInCartAction = (id: number) => {
    return {
        type: ActionTypes.REMOVE_COFFEE_IN_CART,
        payload: {
            id
        }
    }
}

export const saveAddressOnOrderAction = (data:NewCycleFormData) => {
    return {
        type: ActionTypes.SAVE_ADDRESS_ON_ORDER,
        payload: {
            data
        }
    }
}