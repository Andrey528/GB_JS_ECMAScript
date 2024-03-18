// Листинг 1
// Объект робот-пылесос.
const Roomba = {
  // Есть негласное правило называть объекты в алгоритмах с большой буквы.
  // Обычно сначала объявляют свойства объекта.
  model: 'Romba-1',
  power: 200,
  batterySize: 2100,
  boxSize: 0.5,
  workTime: 45,
  counterOfStarts: 0,
  isFull: false,
  isObstacle: false,
  isUVLampOn: false,
  // После свойств объявляют его методы.
  startCleaning: function () {
    this.counterOfStarts++;
    console.log(
      'I am cleaning... I have been started: ',
      this.counterOfStarts,
      'times.'
    );
  },
  goCharge: function () {
    console.log('I am going to charge...');
  },
  switchUVLamp: function () {
    this.isUVLampOn = !this.isUVLampOn;
    console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
  },
};

// Листинг 2
// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false
// Вызов методов объекта.
Roomba.startCleaning(); // 'I am cleaning... I have been started: 1 times.'
// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать результат работы метода switchUVLamp.
Roomba.isUVLampOn = true;
// Результат вызова следующего метода зависит от значения, хранящегося в свойстве объекта, а также от того как этот метод был вызван (об этом поговорим чуть ниже).
Roomba.switchUVLamp(); // 'UV lamp is not working.'
Roomba.goCharge(); // 'I am going to charge...'

// Листинг 5
// Объект Roomba - робот-пылесос. Код самого объекта смотри в листинге 1.
// Объект робот-пылесос модель Tango.
const Tango = {
  // Есть негласное правило называть объекты в алгоритмах с большой буквы.
  // Обычно сначала объявляют свойства объекта.
  model: 'Tango-1',
  power: 300,
  batterySize: 3200,
  boxSize: 0.7,
  workTime: 60,
  counterOfStarts: 0,
  isFull: false,
  isObstacle: false,
  isUVLampOn: false,
  // После свойств объявляют его методы. А так как методы у новой модели такие же как и у старой, давайте позаимствуем их у объекта Roomba.
  startCleaning: Roomba.startCleaning,
  goCharge: Roomba.goCharge,
  switchUVLamp: Roomba.switchUVLamp,
};

// Листинг 6
// Объект Roomba - робот-пылесос. Код самого объекта смотри в листинге 1.
// Обращение к свойствам и методом объекта Roomba. Код обращения смотри в листинге 2.
// Объект Tango - робот-пылесос. Код самого объекта смотри в листинге 5.
// Обращение к свойствам объекта Tango.
console.log(Tango.model); // "Tango-1"
console.log(Tango.isFull); // false
// Вызов методов объекта.
Tango.startCleaning(); // 'I am cleaning... I have been started: 1 times.'
// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать результат работы метода switchUVLamp.
Tango.isUVLampOn = true;
// Результат вызова следующего метода зависит от значения, хранящегося в свойстве объекта, а также от того как этот метод был вызван (об этом поговорим чуть ниже).
Tango.switchUVLamp(); // 'UV lamp is not working.'
Tango.goCharge(); // 'I am going to charge...'

// Листинг 7
// Объект робот-пылесос модель Samba.
const Samba = {
  model: 'Samba-1',
  power: 250,
  batterySize: 2500,
  boxSize: 0.5,
  workTime: 50,
  counterOfStarts: 0,
  isFull: false,
  isObstacle: false,
  isUVLampOn: false,
  // На этот раз мы не будем создавать методы в объекте, мы постараемся их заимствовать непосредственно перед использованием.
};

// Листинг 8
// Объект Samba - робот-пылесос. Код самого объекта смотри в листинге 7.
// Обращение к свойствам объекта Samba.
console.log(Samba.model); // "Samba-1"
console.log(Samba.isFull); // false
// Одолжим методы из объекта Roomba.
Samba.startCleaning = Roomba.startCleaning;
Samba.switchUVLamp = Roomba.switchUVLamp;
Samba.goCharge = Roomba.goCharge;
// Вызов методов объекта.
Samba.startCleaning(); // 'I am cleaning... I have been started: 1 times.'
// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать результат работы метода switchUVLamp.
Samba.isUVLampOn = true;
// Результат вызова следующего метода зависит от значения, хранящегося в свойстве объекта, а также от того как этот метод был вызван (об этом поговорим чуть ниже).
Samba.switchUVLamp(); // 'UV lamp is not working.'
Samba.goCharge(); // 'I am going to charge...'

// Листинг 11
// Объект Roomba - робот-пылесос. Код самого объекта смотри в листинге 1.
// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false
// Вызов методов объекта.
setTimeout(Roomba.startCleaning, 1000);
// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать результат работы метода switchUVLamp.
Roomba.isUVLampOn = true;
// Результат вызова следующего метода зависит от значения, хранящегося в свойстве объекта, а также от того как этот метод был вызван (об этом поговорим чуть ниже).
setTimeout(Roomba.switchUVLamp, 2000);
setTimeout(Roomba.goCharge, 3000);
// I am cleaning... I have started: NaN times.
// UV lamp is working.
// I am going to charge...

// Листинг 12.
// Объект Roomba - робот-пылесос. Код самого объекта смотри в листинге 1.
// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false
// Вызов методов объекта.
setTimeout(function () {
  Roomba.startCleaning();
}, 1000);
// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать результат работы метода switchUVLamp.
Roomba.isUVLampOn = true;
// Результат вызова следующего метода зависит от значения, хранящегося в свойстве объекта, а также от того как этот метод был вызван (об этом поговорим чуть ниже).
setTimeout(function () {
  Roomba.switchUVLamp();
}, 2000);
setTimeout(function () {
  Roomba.goCharge();
}, 3000);
// I am cleaning... I have started: 1 times.
// UV lamp is not working.
// I am going to charge...

// Листинг 13
// Объект Roomba - робот-пылесос. Код самого объекта смотри в листинге 1.
// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false
// Вызов методов объекта.
// Вызов метода объекта через call с явной передачей объекта робота-пылесоса в качестве контекста.
Roomba.startCleaning.call(Roomba); // I am cleaning... I have started: 1 times.
// Тут этот пример не очень показателен, т.к. Мы и так имели доступ к объекту, а внутри setTimeout использовать call возможно только обернув все это в анонимную функцию, но тоже бессмысленно, потому что тогда мы снова имеем доступ к объекту, как видели в прошлом примере. Но мы можем передать в call другой объект и увидеть что функция вызывается в контексте другого объекта:

// Создадим фиктивный объект робота, который содержит только одно свойство, необходимое для работы функции и сразу же зададим ему первоначальное значение, отличное от того, которое задано у робота, для наглядности.
const notARobot = {
  counterOfStarts: 10,
};
Roomba.startCleaning.call(notARobot); // I am cleaning... I have been started: 11 times.

// Листинг 14
// Объект Roomba - робот-пылесос. Код самого объекта смотри в первом листинге.
const notARobot2 = {
  counterOfStarts: 10,
};
// Пример использования метода apply, для вызова функции с передачей в качестве контекста объекта notARobot и передачей в неё аргументов arg1, arg2, arg3.
Roomba.startCleaning.apply(notARobot2, [arg1, arg2, arg3]); // I am cleaning... I have been started: 11 times.

// Листинг 15
// Объект Roomba - робот-пылесос. Код самого объекта смотри в листинге 1.
// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false
// Вызов методов объекта.
// В setTimeout мы передаем не просто наш метод, а функцию, которая привязана к нашему объекту. Метод bind возвращает новую функцию, с уже привязанным контекстом, именно она вызывается по истечении времени.
setTimeout(Roomba.startCleaning.bind(Roomba), 1000);
// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать результат работы метода switchUVLamp.
Roomba.isUVLampOn = true;
// Результат вызова следующего метода зависит от значения, хранящегося в свойстве объекта, а также от того как этот метод был вызван (об этом поговорим чуть ниже).
setTimeout(Roomba.switchUVLamp.bind(Roomba), 2000);
setTimeout(Roomba.goCharge.bind(Roomba), 3000);
// I am cleaning... I have been started: 1 times.
// UV lamp is not working.
// I am going to charge...

// Листинг 16
const Roomba = {
  model: 'Romba-1',
  power: 200,
  batterySize: 2100,
  boxSize: 0.5,
  workTime: 45,
  counterOfStarts: 0,
  isFull: false,
  isObstacle: false,
  isUVLampOn: false,
  // После свойств объявляют его методы.
  startCleaning: () => {
    this.counterOfStarts++;
    console.log(
      'I am cleaning... I have started: ',
      this.counterOfStarts,
      'times.'
    );
  },
  goCharge: () => {
    console.log('I am going to charge...');
  },
  switchUVLamp: () => {
    this.isUVLampOn = !this.isUVLampOn;
    console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
  },
};

// Листинг 17
// Объект Roomba - робот-пылесос. Код самого объекта смотри в листинге 16, с использованием синтаксиса ES2015.
// Вызов методов объекта.
Roomba.startCleaning(); // I am cleaning... I have started: NaN times.
Roomba.startCleaning.call(Roomba); // I am cleaning... I have started: NaN times.
Roomba.startCleaning.apply(Roomba); // I am cleaning... I have started: NaN times.
const bindedMethod = Roomba.startCleaning.bind(Roomba);
bindedMethod(); // I am cleaning... I have been started: NaN times.
setTimeout(Roomba.startCleaning.bind(Roomba), 1000); // I am cleaning... I have started: NaN times.

// Листинг 18
const Stand = {
  model: 'Stand-1',
  robots: ['Roomba-1', 'Tango-1', 'Samba-1', 'Roomba-2'],
  // Метод, с использованием стрелочной функции в качестве функции обратного вызова.
  startTestingArrow: function () {
    console.log('Start testing...');
    this.robots.forEach((value) => {
      console.log('stand: ', this.model, 'is testing robot: ', value);
    });
  },
  // Метод, с использованием классической функции в качестве функции обратного вызова.
  startTestingClassic: function () {
    console.log('Start testing...');
    this.robots.forEach(function (value) {
      console.log('stand: ', this.model, 'is testing robot: ', value);
    });
  },
};
Stand.startTestingArrow();
// Start testing...
// stand: Stand-1 is testing robot: Roomba-1
// stand: Stand-1 is testing robot: Tango-1
// stand: Stand-1 is testing robot: Samba-1
// stand: Stand-1 is testing robot: Roomba-2
Stand.startTestingClassic();
// Start testing...
// stand: undefined is testing robot: Roomba-1
// stand: undefined is testing robot: Tango-1
// stand: undefined is testing robot: Samba-1
// stand: undefined is testing robot: Roomba-2

// Листинг 19
// Класс робот-пылесос.
class RobotVacuumCleaner {
  // Свойства класса.
  model = 'Romba-1';
  power = 200;
  batterySize = 2100;
  boxSize = 0.5;
  workTime = 45;
  counterOfStarts = 0;
  isFull = false;
  isObstacle = false;
  isUVLampOn = false;
  // Конструктор класса, мы изучим его подробнее на следующем уроке.
  constructor() {}
  // Методы класса.
  startCleaning() {
    this.counterOfStarts++;
    console.log(
      'I am cleaning... I have been started: ',
      this.counterOfStarts,
      'times.'
    );
  }
  goCharge() {
    console.log('I am going to charge...');
  }
  switchUVLamp() {
    this.isUVLampOn = !this.isUVLampOn;
    console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
  }
}
// Создадим экземпляр класса.
const Roomba = new RobotVacuumCleaner();

// Листинг 20
// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false
// Отложенный вызов методов объекта.
setTimeout(Roomba.startCleaning, 1000);
// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать результат работы метода switchUVLamp.
Roomba.isUVLampOn = true;
setTimeout(Roomba.switchUVLamp, 2000);
setTimeout(Roomba.goCharge, 3000);
// I am cleaning... I have started: NaN times.
// UV lamp is working.
// I am going to charge...

// Листинг 21
// Класс робот-пылесос.
class RobotVacuumCleaner {
  // Свойства класса.
  model = 'Romba-1';
  power = 200;
  batterySize = 2100;
  boxSize = 0.5;
  workTime = 45;
  counterOfStarts = 0;
  isFull = false;
  isObstacle = false;
  isUVLampOn = false;
  // Используем его, чтобы привязать все методы класса к контексту - текущему объекту (this).
  constructor() {
    this.startCleaning = this.startCleaning.bind(this);
    this.goCharge = this.goCharge.bind(this);
    this.switchUVLamp = this.switchUVLamp.bind(this);
  }
  // Методы класса.
  startCleaning() {
    this.counterOfStarts++;
    console.log(
      'I am cleaning... I have been started: ',
      this.counterOfStarts,
      'times.'
    );
  }
  goCharge() {
    console.log('I am going to charge...');
  }
  switchUVLamp() {
    this.isUVLampOn = !this.isUVLampOn;
    console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
  }
}
// Создадим экземпляр класса.
const Roomba = new RobotVacuumCleaner();

// Листинг 22
// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false
// Отложенный вызов методов объекта.
setTimeout(Roomba.startCleaning, 1000);
// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать результат работы метода switchUVLamp.
Roomba.isUVLampOn = true;
setTimeout(Roomba.switchUVLamp, 2000);
setTimeout(Roomba.goCharge, 3000);
// I am cleaning... I have started: 1 times.
// UV lamp is not working.
// I am going to charge...

// Листинг 23
// Класс робот-пылесос.
class RobotVacuumCleaner {
  // Свойства класса.
  model = 'Romba-1';
  power = 200;
  batterySize = 2100;
  boxSize = 0.5;
  workTime = 45;
  counterOfStarts = 0;
  isFull = false;
  isObstacle = false;
  isUVLampOn = false;
  // Конструктор класса, мы изучим его подробнее на следующем уроке.
  constructor() {}
  // Методы класса.
  startCleaning = () => {
    this.counterOfStarts++;
    console.log(
      'I am cleaning... I have been started: ',
      this.counterOfStarts,
      'times.'
    );
  };
  goCharge = () => {
    console.log('I am going to charge...');
  };
  switchUVLamp = () => {
    this.isUVLampOn = !this.isUVLampOn;
    console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
  };
}
// Создадим экземпляр класса.
const Roomba = new RobotVacuumCleaner();

// Листинг 24
// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false
// Отложенный вызов методов объекта.
setTimeout(Roomba.startCleaning, 1000);
// Установим свойства объекта isUVLampOn в true, чтобы продемонстрировать результат работы метода switchUVLamp.
Roomba.isUVLampOn = true;
setTimeout(Roomba.switchUVLamp, 2000);
setTimeout(Roomba.goCharge, 3000);
// I am cleaning... I have started: 1 times.
// UV lamp is not working.
// I am going to charge...
