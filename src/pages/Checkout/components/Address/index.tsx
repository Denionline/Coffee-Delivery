import { MapPinLine } from "@phosphor-icons/react"
import { AddressContainer, AddressInfoForm, PresentationAddress } from "./style"
import { useFormContext } from "react-hook-form"

export const Address = () => {

    const { register } = useFormContext();

    return (
        <AddressContainer>
            <PresentationAddress>
                <MapPinLine className="MapPinIcon" size={22} />
                <div>
                    <h3>Endereço de Entrega</h3>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
            </PresentationAddress>
            
            <AddressInfoForm>
                <input 
                    className="CEP"
                    placeholder="CEP"
                    {...register('CEP')}
                />
                <input 
                    className="Rua"
                    placeholder="Rua"
                    {...register('Rua')}
                />
                <div>
                    <input 
                        className="Numero"
                        placeholder="Número"
                        {...register('Numero')}
                    />
                    <div className="Complemento">
                        <input                             
                            type="text"
                            placeholder="Complemento"
                            {...register('Complemento')}
                        />
                        <span>Opcional</span>
                    </div>
                </div>
                <div>
                    <input 
                        className="Bairro"
                        placeholder="Bairro"
                        {...register('Bairro')}
                    />
                    <input 
                        className="Cidade"
                        placeholder="Cidade"
                        {...register('Cidade')}
                        />
                    <input 
                        className="UF"
                        placeholder="UF"
                        {...register('UF')}    
                    />
                </div>
            </AddressInfoForm>
        </AddressContainer>
    )
}