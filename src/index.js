import { home, menu, contact } from "./modules";

const navLink = Array.from(document.querySelectorAll(".nav-link"));

function changeTab() {
  navLink.forEach((e) => e.classList.remove("active"));
  this.classList.add("active");
  this.innerText === "Home"
    ? home()
    : this.innerText === "Menu"
    ? menu()
    : this.innerText === "Contact"
    ? contact()
    : "Not Match";
}

navLink.forEach((e) => {
  e.addEventListener("click", changeTab);
});
