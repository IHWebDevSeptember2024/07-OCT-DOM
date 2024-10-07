// SPREAD OPERATOR

const insectLatinNames = [
  "Coleoptera",
  "Lepidoptera",
  "Diptera",
  "Hymenoptera",
  "Orthoptera",
];

console.log(insectLatinNames);

// Una forma de hacer una copia y añadir un nuevo elemento
const newArray = insectLatinNames.map((insect) => insect);
newArray.push("Mantodea");

console.log(newArray);

// Usando el spread operator

const spreadArray = ["Blastottea", ...newArray];

console.log(spreadArray);

// sirve para crear una copia exacta de un array
// OJO, solo para arrays u objetos que contengan PRIMITIVE DATA TYPES
const copy = [...insectLatinNames];
