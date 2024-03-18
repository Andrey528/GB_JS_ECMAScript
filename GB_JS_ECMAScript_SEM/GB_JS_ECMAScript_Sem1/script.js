// Создайте функцию mergeArrays, которая принимает два массива и возвращает новый массив, содержащий все элементы из обоих массивов. Используйте spread оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); Ожидаемый результат: [1, 2, 3, 4, 5, 6]

const mergeArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// Создайте функцию removeDuplicates, которая принимает любое количество аргументов и возвращает новый массив, содержащий только уникальные значения. Используйте rest оператор для сбора всех аргументов в массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); Ожидаемый результат: [1, 2, 3, 4, 5]

const removeDuplicates = (...args) => {
  return args.filter((item, index) => args.indexOf(item) === index);
};

console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// Вам необходимо написать функцию на JavaScript, которая принимает массив чисел и возвращает максимальное число из него, используя спред и рест методы. Функция должна работать для массивов любой длины, начиная с 2 элементов.

const findMax = (...numbers) => {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
};

console.log(findMax(5, 2, 9, 1));

// Напишите функцию getEvenNumbers, которая принимает массив чисел в качестве аргумента и возвращает новый массив, содержащий только четные числа.

const getEvenNumbers = (...args) => {
  return args.filter((item) => item % 2 === 0);
};

console.log(getEvenNumbers(1, 2, 3, 4, 5, 6, 7));

// Напишите функцию calculateAverage, которая принимает массив чисел в качестве аргумента и возвращает среднее значение этих чисел.

const calculateAverage = (...args) => {
  return args.reduce((acc, value) => (acc += value)) / args.length;
};

console.log(calculateAverage(1, 2, 3, 4, 5));

// Напишите функцию capitalizeFirstLetter, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной.

const capitalizeFirstLetter = (str) => {
  let strArray = str.split(' ');
  let capitalizedArray = strArray.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedArray.join(' ');
};

console.log(capitalizeFirstLetter('andrey'));

// Напишите функцию createCalculator, которая принимает начальное значение и возвращает объект с двумя методами: add и subtract. Метод add должен увеличивать значение на переданное число, а метод subtract должен уменьшать значение на переданное число. Значение должно быть доступно только через методы объекта, а не напрямую.

const createCalculator = (initialValue) => {
  let value = initialValue;

  return {
    add: function (arg) {
      value += arg;
      console.log(value);
    },
    subtract: function (arg) {
      value -= arg;
      console.log(value);
    },
    getValue: function () {
      return value;
    },
  };
};

let calculator = createCalculator(10);

document.querySelector('.add').addEventListener('click', function (e) {
  calculator.add(5);
});

document.querySelector('.subtract').addEventListener('click', function (e) {
  calculator.subtract(3);
});

// Задача: Напишите функцию createPasswordChecker, которая принимает допустимую длину пароля в качестве аргумента и возвращает функцию для проверки введенного пароля. Возвращаемая функция должна принимать пароль и возвращать true, если его длина соответствует допустимой, и false в противном случае.
// Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат: false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

const createPasswordChecker = (passwordLength) => {
  return (password) => {
    return password.length <= passwordLength;
  };
};

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password')); // Ожидаемый результат: false
console.log(isPasswordValid('secret')); // Ожидаемый результат: true
