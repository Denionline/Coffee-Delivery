import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react"
import { Methods, PaymentMethodContainer, PresentationPaymentMethod } from "./styles"
import { useState } from "react"
import { useFormContext } from "react-hook-form";

enum MethodsPayment {
    DebitCard = "Cartão de Débito",
    CreditCard = "Cartão de Crédito",
    Money = "Dinheiro"
}

export const PaymentMethod = () => {

    const { register } = useFormContext();

    const [methodPayment, setMethodPayment] = useState('');

    return (
        <PaymentMethodContainer>
            <PresentationPaymentMethod>
                <CurrencyDollar className="CurrencyDollarIcon" size={22} />
                <div>
                    <h3>Pagamento</h3>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
            </PresentationPaymentMethod>
            
            <Methods>              
                <label 
                    className={methodPayment === MethodsPayment.CreditCard ? "selected" : ""}
                    onClick={() => {setMethodPayment(MethodsPayment.CreditCard)}}
                >
                    <input 
                        type="radio"
                        value={MethodsPayment.CreditCard}
                        {...register('PaymentMethod', {required: true})}
                    />
                    <CreditCard className="Icon" size={16} />
                    <span>Cartão de Crédito</span>
                </label>

                <label
                    className={methodPayment === MethodsPayment.Money ? "selected" : ""}
                    onClick={() => {setMethodPayment(MethodsPayment.Money)}}
                >
                    <input 
                        type="radio"
                        value={MethodsPayment.Money}
                        {...register('PaymentMethod', {required: true})}
                    />
                    <Money className="Icon" size={16} />
                    <span>Dinheiro</span>                
                </label>

                <label
                    className={methodPayment === MethodsPayment.DebitCard ? "selected" : ""}
                    onClick={() => {setMethodPayment(MethodsPayment.DebitCard)}}
                >
                    <input 
                        type="radio"
                        value={MethodsPayment.DebitCard}
                        {...register('PaymentMethod', {required: true})}
                    />
                    <Bank className="Icon" size={16} />
                    <span>Cartão de Débito</span>
                </label>
            </Methods>
        </PaymentMethodContainer>
    )
}