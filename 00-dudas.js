const neurotransmitters = [
  "Acetylcholine",
  "Dopamine",
  "Serotonin",
  "Norepinephrine",
  "GABA",
  "Glutamate",
  "Endorphins",
  "Histamine",
];

// FOREACH
// El forEach nunca devuelve nada (siempre será undefined)
// nos sirve para modificar elementos del array original (por ejemplo)

neurotransmitters.forEach((neurotransmitter, index) => {
  neurotransmitters[index] = neurotransmitter.toLowerCase();
});

console.log(neurotransmitters);

// MAP
// me va a servir para crear un nuevo array según una referencia
// la diferencia es que MAP SIEMPRE necesita un return y creará un nuevo array

const newArray = neurotransmitters.map((neurotransmitter) => {
  return neurotransmitter.toUpperCase();
});

console.log(newArray);

const bodyOrgans = [
  { organ: "Heart", part: "Chest" },
  { organ: "Lungs", part: "Chest" },
  { organ: "Brain", part: "Head" },
  { organ: "Liver", part: "Abdomen" },
  { organ: "Kidneys", part: "Abdomen" },
  { organ: "Stomach", part: "Abdomen" },
  { organ: "Intestines", part: "Abdomen" },
  { organ: "Bladder", part: "Pelvis" },
];

const result = bodyOrgans.map((bodyOrgan) => {
  return { ...bodyOrgan, doIHaveIt: true };
});

console.log("ORIGINAL ", bodyOrgans);
console.log("RESULT ", result);

