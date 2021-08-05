import { makeElement } from "./make-elements";

const content = document.getElementById("content");

// Generates complete navbar
const makeNavbar = () => {
  const navBar = makeElement({ type: "ul", id: "navbar", className: "navbar" });
  content.appendChild(navBar);

  const navTitle = makeElement({ type: "li", id: "nav", className: "nav" });
  navTitle.innerHTML = "BATTLESHIP";
  navBar.appendChild(navTitle);
};

export default makeNavbar;
