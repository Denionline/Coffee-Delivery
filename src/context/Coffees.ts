import CoffeeImages from "../pages/Home/components/CoffeeList/assets/CoffeeImages";

export interface CoffeeType {
  id: number;
  img: string;
  name: string;
  price: number;
  description?: string | undefined;
  types?: string[] | undefined;
}

export const CoffeesAPI: CoffeeType[] = [
  {
    id: 1,
    img: CoffeeImages.Americano,
    name: "Americano",
    price: 9.9,
    description: "Expresso diluído, menos intenso que o tradicional",
    types: ["Tradicional"],
  },
  {
    id: 2,
    img: CoffeeImages.CafeGelado,
    name: "Café Gelado",
    price: 9.9,
    description: "Bebida gelada à base de café expresso",
    types: ["Tradicional", "Gelado"],
  },
  {
    id: 3,
    img: CoffeeImages.CafeComLeite,
    name: "Café com Leite",
    price: 9.9,
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    types: ["Tradicional", "Com Leite"],
  },
  {
    id: 4,
    img: CoffeeImages.Capuccino,
    name: "Capuccino",
    price: 9.9,
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    types: ["Tradicional", "Com Leite"],
  },
  {
    id: 5,
    img: CoffeeImages.ChocolateQuente,
    name: "Chocolate Quente",
    price: 9.9,
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    types: ["Especial", "Com Leite"],
  },
  {
    id: 6,
    img: CoffeeImages.Cubano,
    name: "Cubano",
    price: 9.9,
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    types: ["Especial", "Alcoólico", "Gelado"],
  },
  {
    id: 7,
    img: CoffeeImages.ExpressoCremoso,
    name: "Expresso Cremoso",
    price: 9.9,
    description: "Café expresso tradicional com espuma cremosa",
    types: ["Tradicional"],
  },
  {
    id: 8,
    img: CoffeeImages.Expresso,
    name: "Expresso",
    price: 9.9,
    description: "Café feito com grãos moídos e água quente",
    types: ["Tradicional"],
  },
  {
    id: 9,
    img: CoffeeImages.Havaiano,
    name: "Havaiano",
    price: 9.9,
    description: "Bebida adocicada preparada com café e leite de coco",
    types: ["Especial"],
  },
  {
    id: 10,
    img: CoffeeImages.Irlandes,
    name: "Irlandês",
    price: 9.9,
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    types: ["Especial", "Alcoólico"],
  },
  {
    id: 11,
    img: CoffeeImages.Latte,
    name: "Latte",
    price: 9.9,
    description: "Uma dose de café expresso com o dobro de leite e espuma",
    types: ["Tradicional", "Com Leite"],
  },
  {
    id: 12,
    img: CoffeeImages.Macchiato,
    name: "Macchiato",
    price: 9.9,
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    types: ["Tradicional", "Com Leite"],
  },
  {
    id: 13,
    img: CoffeeImages.Mochaccino,
    name: "Mochaccino",
    price: 9.9,
    description: "Café expresso com calda de chocolate, leite e espuma",
    types: ["Tradicional", "Com Leite"],
  },
  {
    id: 14,
    img: CoffeeImages.Arabe,
    name: "Árabe",
    price: 9.9,
    description: "Bebida preparada com grãos de café árabe e especiarias",
    types: ["Especial"],
  },
];
