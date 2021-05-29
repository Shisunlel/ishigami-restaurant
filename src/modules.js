const createTextElement = (el, text) => {
  const element = document.createElement(el);
  element.innerText = text;
  return element;
};

const createImage = (src, alt) => {
  const img = document.createElement("img");
  img.src = `public/img/${src.toLowerCase()}`;
  img.alt = alt;
  return img;
};

const createDiv = () => {
  const div = document.createElement("div");
  return div;
};

const createMenuItem = (foodName, description, imageSrc, imageAlt, price) => {
  const card = createDiv();
  card.className = "card";
  const p = createTextElement("p", foodName);
  const em = createTextElement("em", description);
  const img = createImage(imageSrc, imageAlt);
  const divImage = createDiv();
  divImage.className = "img-container menu";
  divImage.append(img);
  const anotherP = createTextElement("p", price);
  card.append(p, em, divImage, anotherP);
  return card;
};

export { createTextElement, createImage, createDiv, createMenuItem };
