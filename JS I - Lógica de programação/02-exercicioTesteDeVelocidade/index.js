const nameCar01 = prompt("Nome do primeiro carro: ");
let velCar01 = parseFloat(prompt("Velocidade do " + nameCar01));
const nameCar02 = prompt("Nome do segundo carro: ");
let velCar02 = parseFloat(prompt("Velocidade do " + nameCar02));

if (velCar01 > velCar02) {
  alert(
    "Velicidade do " +
      nameCar01 +
      " é maior do que a velocidade do " +
      nameCar02 +
      "."
  );
} else if (velCar01 < velCar02) {
  alert(
    "Velicidade do " +
      nameCar01 +
      " é menor do que a velocidade do " +
      nameCar02 +
      "."
  );
} else {
  alert(
    "As velocidades do " + nameCar01 + " e do " + nameCar02 + " são iguais."
  );
}
