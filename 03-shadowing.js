// SHADOWING

let index = 10;

for (let index = 0; index <= 50; index++) {
  // el anterior index queda "ensombrecido" por el nuevo
  console.log(index);
}

console.log("INDEX EN GLOBAL SCOPE: ", index);