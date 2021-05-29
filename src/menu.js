import { createMenuItem } from "./modules";

const content = document.querySelector('.content')

const menu = () => {
  content.innerHTML = "";
  const firstItem = createMenuItem(
    "Ramen",
    "Not just any ramen but the only ramen to exist made with foxtail millet",
    "ramen.webp",
    "Ramen Image",
    "56 Stones"
  );
  const secondItem = createMenuItem(
    "Cola",
    "It isn't a great meal without the perfect drink combi",
    "cola.webp",
    "Cola Image",
    "15 Stones"
  );
  const thirdItem = createMenuItem(
    "Cotton Candy",
    "A perfect finishing touch dessert",
    "cotton_candy.webp",
    "Cotton Candy Image",
    "15 Stones"
  );
  content.append(firstItem, secondItem, thirdItem)
};

export default menu