import { Address } from "./components/Address";
import { Cart } from "./components/Cart";
import { PaymentMethod } from "./components/PaymentMethod";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

import {
    ButtonConfirmOrder,
    CheckoutContainer,
    InfoAddressAndPay,
    InfoSelectedCoffees
} from "./styles"
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import { useNavigate } from "react-router-dom";

const newOrderFormValidationSchema = yup.object().shape({
    CEP: yup.number().min(1000000).max(99990000).required(),
    Rua: yup.string().min(1).max(50),
    Numero: yup.string().min(1).max(5),
    Complemento: yup.string(),
    Bairro: yup.string().min(1).max(20),
    Cidade: yup.string().min(1).max(20),
    UF: yup.string().min(2).max(2),
    PaymentMethod: yup.string(),
})

export type NewCycleFormData = yup.InferType<typeof newOrderFormValidationSchema>

export const Checkout = () => {
    
    const { saveAddressOnOrder } = useContext(OrderContext);
    
    const newOrderForm = useForm<NewCycleFormData>({
        resolver: yupResolver(newOrderFormValidationSchema)
    });

    const { handleSubmit } = newOrderForm;

    const navigate = useNavigate();

    function handleSubmitForm(data:NewCycleFormData){
        saveAddressOnOrder(data)
        navigate('/Success');
    }

    return (
        <CheckoutContainer>
            <form action="FormNewOrder" onSubmit={handleSubmit(handleSubmitForm)}>
                <InfoAddressAndPay>
                    <h2>Complete seu pedido</h2>
                    <FormProvider {...newOrderForm}>
                        <Address />
                        <PaymentMethod />
                    </FormProvider>
                </InfoAddressAndPay>

                <InfoSelectedCoffees>
                    <h2>Cafés selecionados</h2>
                    <Cart />
                    <ButtonConfirmOrder
                        type="submit"
                        value="Confirmar Pedido"
                    />
                </InfoSelectedCoffees>
            </form>
        </CheckoutContainer>
    )
}