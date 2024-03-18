// Создайте объект Person, представляющий человека, с следующими свойствами: name, age и gender. Добавьте также методы introduce и changeName. Метод introduce должен выводить информацию о человеке, включая его имя, возраст и пол. Метод changeName должен изменять имя человека на новое заданное значение.
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");

// const person = {
//   name: 'John',
//   age: 18,
//   gender: 'male',

//   introduce() {
//     console.log(
//       `My name is ${this.name} i'm ${this.age} years old my sex is ${this.gender}`
//     );
//   },

//   changeName(newName) {
//     this.name = newName;
//   },
// };

// person.name = 'John';
// person.age = 25;
// person.gender = 'male';
// person.introduce(); // Ожидаемый результат: My name is John. I'm 25 years old and I identify as male.
// person.changeName('Mike');
// person.introduce();

// Создайте объект Animal со свойством name и методом eat(), который выводит сообщение о том, что животное ест. Создайте объект Dog со свойством name и методом bark(), который выводит сообщение о том, что собака лает. Используйте одалживание метода eat() из объекта Animal для объекта Dog, чтобы вывести сообщение о том, что собака ест.
// Dog.eat(); // Вывод: Rex is eating.

const animal = {
  name: 'Fluf',

  eat() {
    console.log(`${this.name} is eating`);
  },
};

const dog = {
  name: 'Sharik',

  bark() {
    console.log(`${this.name} is barking`);
  },
};

dog.eat = animal.eat;

dog.eat();

// Создайте объект calculator с методами add(), subtract() и multiply(), которые выполняют соответствующие математические операции над двумя числами. Используйте методы call и apply для вызова этих методов с передачей аргументов.

// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8

// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
};

console.log(calculator.add.call(null, 5, 3)); // Вывод: 8

console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

// Создайте класс Person, который имеет свойства name и age, а также метод introduce(), который выводит сообщение с представлением имени и возраста персоны.

// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old.

class Person {
  name;
  age;
  gender;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(
      `My name is ${this.name} i'm ${this.age} years old my sex is ${this.gender}`
    );
  }

  changeName(newName) {
    this.name = newName;
  }
}

const person = new Person('John', 25);
person.introduce(); // Вывод: My name is John and I'm 25 years old.

// Создайте класс BankAccount, который представляет банковский счет. У него должны быть свойства accountNumber (номер счета) и balance (баланс), а также методы deposit(amount) для пополнения счета и withdraw(amount) для снятия денег со счета. Класс должен иметь также статическое свойство bankName, которое содержит название банка.

// const account1 = new BankAccount("1234567890", 1000);
// account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
// account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
// account1.withdraw(1500); // Вывод: Insufficient funds in account 1234567890

class BankAccount {
  static bankName = 'My Bank';
  accountNumber;
  balance;

  constructor(accountNumber, balance) {
    if (balance < 0) {
      throw new Error('Initial balance cannot be negative');
    }
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    // Проверка, что собираемся ввести не отрицательную сумму
    if (amount <= 0) {
      throw new Error('Deposit amount must be positive');
    }
    this.balance += amount;
    console.log(
      `Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`
    );
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error('Withdrawal amount must be positive');
    }
    // Проверяем баланс перед тем, как выводить денежные средства
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(
        `Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`
      );
    } else {
      console.log(`Insufficient funds in account ${this.accountNumber}`);
    }
  }

  // Проверка баланса
  checkBalance() {
    console.log(
      `Current balance in account ${this.accountNumber} is ${this.balance}`
    );
  }

  static getBankName() {
    return BankAccount.bankName;
  }
}

const account1 = new BankAccount('1234567890', 1000);
account1.deposit(500);
account1.withdraw(200);
account1.withdraw(1500);
account1.checkBalance();
console.log(BankAccount.getBankName());
