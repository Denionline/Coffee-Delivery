import {
  CoffeeItem,
  IntroItemns,
  IntroContainer,
  PackageItem,
  ShoppingCartItem,
  TimerItem,
} from "./styles";

import HomeImage from "./assets/HomeImage.svg";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export const Intro = () => {
  return (
    <IntroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <IntroItemns>
          <ShoppingCartItem>
            <div>
              <ShoppingCart size={16} weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </ShoppingCartItem>
          <PackageItem>
            <div>
              <Package size={16} weight="fill" />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </PackageItem>
          <TimerItem>
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <span>Entrega rápida e rastreada</span>
          </TimerItem>
          <CoffeeItem>
            <div>
              <Coffee size={16} weight="fill" />
            </div>
            <span>O café chega fresquinho até você</span>
          </CoffeeItem>
        </IntroItemns>
      </div>
      <img src={HomeImage} alt="" />
    </IntroContainer>
  );
};
