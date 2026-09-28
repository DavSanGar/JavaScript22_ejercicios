let primerDiv = document.querySelector("div");
let li1 = document.querySelector("li");

console.log(`Contenido del atributo ID: ${primerDiv.id}`);
primerDiv.id = "divconID";
primerDiv.id = "divconID";
console.log(`Contenido del atributo ID: ${primerDiv.id}`);
primerDiv.className = "important";
primerDiv.style = "color: red;";

console.log(`Contenido del atributo ID: ${primerDiv.className}`);

primerDiv.setAttribute("pepito", "");

let input = document.getElementById("name");

input.toggleAttribute("required");

li1.id = "idLi1";

li1.setAttribute("class", "cambioLi1");
li1.removeAttribute(li1);
