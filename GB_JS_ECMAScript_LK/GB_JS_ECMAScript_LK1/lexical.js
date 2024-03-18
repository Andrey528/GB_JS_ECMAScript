const lastName = 'Petrov';
// lexical environment: { lastName: "Petrov" }
const getFullName = (firstName) => {
  // lexical environment: { lastName: "Petrov", firstName: <определяется в момент вызова функции> }
  const fullName = firstName + ' ' + lastName;
  // lexical environment: { lastName: "Petrov", firstName: <определяется в момент вызова функции>, fullName: <вычисляется в момент вызова функции> }
  console.log(fullName);
  return energy;
};
getFullName('Ivan'); // Ivan Petrov
// lexical environment в момент вызова функции становится таким: { lastName: "Petrov", firstName: "Ivan",  fullName: "Ivan Petrov"}

// const houses = [];
// let i = 0;
// while (i < 10) {
//   let house = function () {
//     // функция «дом»
//     console.log(i); // выводит номер дома
//   };
//   houses.push(house);
//   i++;
// }
// houses[0](); // 10 — у нулевого дома номер 10
// houses[7](); // 10 — и у седьмого дома номер 10

// let house = function () {
//   // функция «дом»
//   // лексическое окружение: { i: 10 }
//   console.log(i); // выводит номер дома
// };

// const houses = [];
// let i = 0;
// while (i < 10) {
//   let houseNumber = i; // Здесь мы создаём блочную переменную, которая сохранит значение i для конкретной итерации цикла, и именно её значение попадёт в лексическое окружение функции house.
//   let house = function () {
//     // функция «дом»
//     console.log(houseNumber); // выводит номер дома
//   };
//   houses.push(house);
//   i++;
// }
// houses[0](); // 0 — у нулевого дома номер 0
// houses[7](); // 7 — и у седьмого дома номер 7

const houses = [];
let i = 0;
while (i < 10) {
  let house = function () {
    // функция «дом»
    let houseNumber = i; // Здесь мы создаём блочную переменную, которая сохранит значение i, и именно её значение попадёт в лексическое окружение функции house.
    console.log(houseNumber); // выводит номер дома
  };
  houses.push(house);
  i++;
}
houses[0](); // 0 — у нулевого дома номер 0
houses[7](); // 7 — и у седьмого дома номер 7
