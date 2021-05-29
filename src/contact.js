import { createTextElement, createImage, createDiv } from "./modules";

const content = document.querySelector(".content");

const contact = () => {
  content.innerHTML = "";
  const card = createDiv();
  card.className = "card";
  const p = createTextElement("p", "Don't miss us when visiting tokyo");
  const em = createTextElement(
    "em",
    "Unfortunately, our technology isn't there yet so no social platform available by now but you can find us on the map."
  );
  const img = createImage("ishigami_village.png", "Restaurant Location");
  const divImage = createDiv();
  divImage.className = "img-container map";
  divImage.append(img);
  const span = createTextElement("span", "+Z15 654 234");
  card.append(p, em, divImage, span);
  content.append(card);
};

export default contact;
