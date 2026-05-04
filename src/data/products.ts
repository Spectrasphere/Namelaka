import medovik from "@/assets/cake-medovik.jpg";
import cherry from "@/assets/cake-cherry.jpg";
import caramel from "@/assets/cake-caramel.jpg";
import berries from "@/assets/cake-berries.jpg";
import pistachio from "@/assets/mini-pistachio.jpg";
import eclair from "@/assets/eclair-raspberry.jpg";
import candy from "@/assets/candy-box.jpg";
import gift from "@/assets/gift-cert.jpg";

export type Category =
  | "Солодощі"
  | "Міні-торти"
  | "Торти"
  | "Пуфи"
  | "Шоколад"
  | "Цукерки"
  | "Подарункові сертифікати";

export const categories: Category[] = [
  "Солодощі",
  "Міні-торти",
  "Торти",
  "Пуфи",
  "Шоколад",
  "Цукерки",
  "Подарункові сертифікати",
];

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
  description: string;
};

export const products: Product[] = [
  { id: "p1", name: "Намелачний мелівник", price: 2800, image: medovik, category: "Торти", description: "Класичний медовик з ніжним кремом" },
  { id: "p2", name: "Мелівник з вишнями", price: 3300, image: cherry, category: "Торти", description: "Медові коржі та свіжа вишня" },
  { id: "p3", name: "Карамельний снікерс", price: 3300, image: caramel, category: "Торти", description: "Шоколад, арахіс і солона карамель" },
  { id: "p4", name: "Вершковий з літніми ягодами", price: 3300, image: berries, category: "Торти", description: "Вершковий мус та сезонні ягоди" },
  { id: "p5", name: "Міні-торт Фісташка", price: 890, image: pistachio, category: "Міні-торти", description: "Фісташковий крем і хрустка основа" },
  { id: "p6", name: "Еклер з малиною", price: 185, image: eclair, category: "Солодощі", description: "Заварне тісто, малиновий крем" },
  { id: "p7", name: "Коробка цукерок", price: 650, image: candy, category: "Цукерки", description: "Авторські трюфелі, 12 шт." },
  { id: "p8", name: "Подарунковий сертифікат", price: 1000, image: gift, category: "Подарункові сертифікати", description: "Ідеальний подарунок до свята" },
];
