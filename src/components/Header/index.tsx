import {
  HeaderCart,
  HeaderContainer,
  HeaderLocation,
  QuantityInCart,
} from "./styles";

import LogoCoffeeDelivery from "../../assets/LogoCoffeeDelivery.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../context/OrderContext";

export const Header = () => {
  const { order } = useContext(OrderContext);

  const [quantity, setQuantity] = useState(order.coffeesCart.length);

  const [location, setLocation] = useState<{
    city: string;
    state: string;
  } | null>(null);

  useEffect(() => {
    const getLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition( async (position) => {
          const { latitude, longitude } = position.coords;
  
          try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
            const data = await response.json();
  
            setLocation({
              city: data.address.city || data.address.town || data.address.village || "",
              state: data.address.state || "",
            })
          }
          catch (err) {
            console.error("Error to find address");
          }
        },
        (error) => {
          console.error("Error to get address: " + error.message);
        }
      )
      } else {
        console.error("Error to access location");
      }
    }

    getLocation();
  }, []);


  useEffect(() => {
    setQuantity(order.coffeesCart.length);
  }, [order]);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={LogoCoffeeDelivery} alt="" />
      </NavLink>
      <div>
        <HeaderLocation>
          <MapPin size={22} weight="fill" />
          <span>{location?.city}</span>
        </HeaderLocation>
        <NavLink to="/Checkout">
          <HeaderCart>
            <ShoppingCart size={22} weight="fill" />
            {quantity > 0 && <QuantityInCart>{quantity}</QuantityInCart>}
          </HeaderCart>
        </NavLink>
      </div>
    </HeaderContainer>
  );
};
