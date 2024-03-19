/**
 * Создайте функцию delayedMessage(message, delay), которая принимает аргументы message (строка) и delay (число). Функция должна выводить заданное сообщение в консоль через указанную задержку.
Вызовите функцию delayedMessage() три раза с разными сообщениями и задержками. Например:
delayedMessage("Сообщение 1", 2000)
delayedMessage("Сообщение 2", 1000)
delayedMessage("Сообщение 3", 3000)
После вызова всех функций delayedMessage(), добавьте сообщение вида "Конец программы" с помощью console.log().
 */

let max = 0;

function delayedMessage(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
  if (delay > max) {
    max = delay;
  }
}

// delayedMessage('Сообщение 1', 2000);
// delayedMessage('Сообщение 2', 1000);
// delayedMessage('Сообщение 3', 3000);
// setTimeout(() => {
//   console.log('Конец программы');
// }, max);

/**
 * У вас есть список задач, которые необходимо выполнить в определенном порядке. Каждая задача должна быть выполнена через определенный промежуток времени, заданный в миллисекундах. Вам необходимо написать функцию, которая принимает список задач и интервал времени, а затем выполняет каждую задачу через определенный промежуток времени.

const tasks = [
{ name: 'task 1', time: 1000 },
{ name: 'task 2', time: 2000 },
{ name: 'task 3', time: 3000 },
{ name: 'task 4', time: 4000 },
{ name: 'task 5', time: 5000 }
];
 */

const tasks = [
  { name: 'task 1', time: 1000 },
  { name: 'task 2', time: 2000 },
  { name: 'task 3', time: 3000 },
  { name: 'task 4', time: 4000 },
  { name: 'task 5', time: 5000 },
];

// tasks.forEach((task) => delayedMessage(task.name, task.time));

/**
 * Напишите программу, которая загружает данные с сервера с использованием функции fetch. Ваша задача — использовать предложенный шаблон запроса для получения данных и их обработки.

Создайте функцию, которая отправляет запрос к серверу, используя fetch. Адрес сервера для запроса: https://api.randomdatatools.ru/?count=5 .
В функции реализуйте обработку промиса, возвращаемого fetch. Используйте метод .then() для обработки ответа сервера.
Проверьте свойство response.ok.
Добавьте обработку ошибок с помощью метода .catch(). Выведите сообщение об ошибке в консоль, если в процессе выполнения запроса или обработки данных возникли проблемы.
 */
const body = document.querySelector('body');

const loadData = (data) => {
  data.forEach((el) => {
    // Контейнер продукта
    const box = document.createElement('div');

    const lastName = document.createElement('p');
    lastName.textContent = el.LastName;
    box.appendChild(lastName);

    const firstName = document.createElement('p');
    firstName.textContent = el.FirstName;
    box.appendChild(firstName);

    body.appendChild(box);
  });
};

const URL = 'https://api.randomdatatools.ru/?count=5';

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      loadData(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};

fetchData(URL);
