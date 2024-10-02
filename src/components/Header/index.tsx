import { HeaderCart, HeaderContainer, HeaderLocation, QuantityInCart } from "./styles";

import LogoCoffeeDelivery from "../../assets/LogoCoffeeDelivery.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../context/OrderContext";

export const Header = () => {

  const { order } = useContext(OrderContext);

  const [quantity, setQuantity] = useState(order.coffeesCart.length);

  useEffect(() => {
    setQuantity(order.coffeesCart.length);
  }, [order])

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={LogoCoffeeDelivery} alt="" />
      </NavLink>
      <div>
        <HeaderLocation>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </HeaderLocation>
        <NavLink to="/Checkout">
          <HeaderCart>
            <ShoppingCart size={22} weight="fill" />
            {quantity > 0 && 
              <QuantityInCart>
                {quantity}
              </QuantityInCart>
            }
          </HeaderCart>
        </NavLink>
      </div>
    </HeaderContainer>
  );
};
