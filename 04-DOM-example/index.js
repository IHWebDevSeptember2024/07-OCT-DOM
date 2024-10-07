console.log("ESTO ESTA FUNCIONANDO");

// seleccionamos un elemento que tiene un id
const heroSectionElement = document.querySelector("#section-hero");

heroSectionElement.innerText = "Otra vez hola";
heroSectionElement.innerText = "Tercera vez hola";

// Con querySelector solo vamos a seleccionar la primera ocurrencia
const h1Element = document.querySelector("h1");

h1Element.innerText = "Otro título";

// para seleccionarlos todos necesitamos el querySelectorAll
// va a crear en allh1s una NodeList que es como un array
// pero mas limitada porque no tiene todos los array Methods
const allh1s = document.querySelectorAll("h1");

console.log(allh1s);

allh1s[1].innerText = "Segundo elemento";

for (let index = 0; index < allh1s.length; index++) {
  const element = allh1s[index];
  element.innerText = "Los cambio todos";
}

// también podemos añadir html directamente dentro del elemento
allh1s[1].innerHTML = "<i>Hola</i> <span>resto del título</span>";

// o en múltiples líneas con backticks ``
heroSectionElement.innerHTML = `
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ul>
`;

// heroSectionElement.style.backgroundColor = "blue";
heroSectionElement.style.color = "white";

console.log(heroSectionElement.classList);

heroSectionElement.classList.add("bg-blue");

const buttonElement = document.querySelector("#button");

buttonElement.addEventListener("click", () => {
  console.log(
    "Contiene bg-blue?",
    heroSectionElement.classList.contains("bg-blue")
  );
  if (heroSectionElement.classList.contains("bg-blue")) {
    heroSectionElement.classList.remove("bg-blue");
    heroSectionElement.classList.add("bg-white");
  } else {
    heroSectionElement.classList.remove("bg-white");
    heroSectionElement.classList.add("bg-blue");
  }
});

const toggleElement = document.querySelector("#toggle");

setInterval(() => {
  if (toggleElement.classList.contains("bg-blue")) {
    toggleElement.classList.remove("bg-blue");
    toggleElement.classList.add("bg-white");
  } else {
    toggleElement.classList.remove("bg-white");
    toggleElement.classList.add("bg-blue");
  }
}, 3000);

document.addEventListener("keydown", (event) => {
  // console.log(event);
  if (event.key === "ArrowUp") {
    console.log("Moveremos al personaje arriba");
  }
});

const imageElement = document.querySelector("#image");

// 1 listener para la tecla K

document.addEventListener("keydown", (event) => {
  console.log(event.key);

  if (event.key === "k") {
    imageElement.setAttribute(
      "src",
      "https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg"
    );
    imageElement.setAttribute("alt", "koala");
  }
});

const smallSquareElement = document.querySelector("#small-square");

addEventListener("mousemove", (event) => {
  console.log(event.clientX, event.clientY);
  smallSquareElement.style.top = event.clientY + "px";
  smallSquareElement.style.left = event.clientX + "px";
});

const newLi = document.createElement("li");
newLi.innerText = "item 6, el nuevo";

const ulElement = document.querySelector("ul");

setInterval(() => {
  console.log(ulElement.contains(newLi));
  if (ulElement.contains(newLi)) {
    ulElement.removeChild(newLi);
  } else {
    ulElement.appendChild(newLi);
  }
}, 500);
