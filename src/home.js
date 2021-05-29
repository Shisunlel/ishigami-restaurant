import { createTextElement, createImage, createDiv } from "./modules";

const content = document.querySelector(".content");

const home = () => {
  content.innerHTML = "";
  const p = createTextElement("p", "Best ramen shop in town");
  const secondP = createTextElement("p", "Established since Year 5739");
  const img = createImage("ishigami_senku.jpg", "Owner Image");

  const divImage = createDiv();
  divImage.className = "img-container";
  divImage.append(img);

  const thirdP = createTextElement("p", "Visit us at Ishigami Village");

  const card = createDiv();
  card.className = "card";
  card.append(p, secondP, divImage, thirdP);
  content.append(card);
};

export default home;
