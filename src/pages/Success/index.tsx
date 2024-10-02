import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { InfoOrder, JustGradient, SuccessContainer } from "./styles";

import IllustrationSuccess from "./assets/Illustration.svg";
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

export const Success = () => {

  const { order } = useContext(OrderContext);

  return (
    <SuccessContainer>
      <div>
        <div className="Presentation">
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>

        <div className="Content">
          <JustGradient>
            <InfoOrder>
              <div className="Local">
                <div className="MapPinIcon">
                  <MapPin size={16} weight="fill" />
                </div>
                <div>
                  <p>
                    Entrega em
                    <span className="Bold">
                      {" "}
                      {order.address?.street}, {order.address?.number}
                    </span>
                  </p>
                  <p>{order.address?.district} - {order.address?.city}, {order.address?.uf}</p>
                </div>
              </div>
              <div className="Time">
                <div className="TimerIcon">
                  <Timer size={16} weight="fill" />
                </div>
                <div>
                  <p>Previsão de entrega</p>
                  <p className="Bold">
                    <span>20 min</span>
                    <span> - </span>
                    <span>30 min</span>
                  </p>
                </div>
              </div>
              <div className="PaymentMethod">
                <div className="CurrencyDollarIcon">
                  <CurrencyDollar size={16} />
                </div>
                <div>
                  <p>Pagamento na entrega</p>
                  <p className="Bold">{order.methodPayment}</p>
                </div>
              </div>
            </InfoOrder>
          </JustGradient>
          <img src={IllustrationSuccess} alt="" />
        </div>
      </div>
    </SuccessContainer>
  );
};
