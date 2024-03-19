// Листинг 1
console.log('Start long calculations');
for (let i = 0; i < 100000000; i++) {
  const newDate = new Date(i);
}
console.log('End long calculations');
// Start long calculations
// End long calculations

// Листинг 2
console.log('Start algorithm!');
setTimeout(function timeout() {
  console.log('This will be printed after 5 seconds!');
}, 5000);
console.log('End synchronous code.');

// Листинг 3
// XHR GET запрос
// Для создания запроса сначала нужно создать объект XMLHttpRequest, конструктор вызывается без аргументов.
const xhr = new XMLHttpRequest();
// Открываем запрос. Первый аргумент это метод (GET, POST ...), второй адрес, куда нужно отправить запрос. У данного метода есть еще аргументы, которые мы рассмотрим позже.
xhr.open('GET', 'https://api.github.com/users/octocat');
// Отправляем запрос на сервер. Метод send() может принимать один аргумент - это тело запроса, если оно есть. Для методов POST мы бы передавали тут тело запроса, наш запрос GET не имеет тела запроса.
xhr.send();
// После отправки запроса нам нужно использовать методы слушатели, которые будут асинхронно выполнены при наступлении соответствующего события. Это методы onload, onerror и onprogress - мы сами определяем их функции.
// onload - будет вызван, когда сервер вернет ответ. Это может быть положительный ответ сервера с кодом 200 (все хорошо), так и ошибка, например страница не найдена, тогда код будет 404. Мы должны обрабатывать такие ситуации сами.
xhr.onload = function () {
  if (xhr.status != 200) {
    // если статус не 200, то произошла ошибка
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    console.log(`user: ${xhr.response}`); // response - это ответ сервера
  }
};
// onprogress - функция будет вызываться пока запрос находится в процессе, и позволяет отслеживать ход процесса отправки запроса и получения ответа от сервера. Бывает полезна при отладке сложных запросов.
xhr.onprogress = function (event) {
  console.log(`Get from server: ${event.loaded} bytes`);
  14;
};
// onerror - функция будет вызываться если в запросе пошло что-то не так. НАпример нет соединения с сервером или ошибка в адресе запроса.
xhr.onerror = function () {
  console.log('Request error');
};
// Вывод из функции onprogress.
// Get from server: 1319 bytes
// Вывод из функции onload, приведен не полностью.
// user: {
//   `
// "login": "octocat",
// "id": 583231,
// "node_id": "MDQ6VXNlcjU4MzIzMQ==",
// "avatar_url":
// "https://avatars.githubusercontent.com/u/583231?v=4",
// "gravatar_id": "",
// "url": "https://api.github.com/users/octocat",
// "html_url": "https://github.com/octocat",
// "followers_url":
// "https://api.github.com/users/octocat/followers",
// "following_url":
// "https://api.github.com/users/octocat/following{/other_user}",
// ...`;
// }

// Листинг 4
// Создан объект xhr и был выполнен запрос, но дальше он нам не нужен, прервем его.
xhr.abort();

// Листинг 5
// XHR POST запрос
// Создадим объект FormData.
const formData = new FormData();
// Добавим в него два наших поля.
formData.append('name', 'Slava');
formData.append('surname', 'Belkin');
// Для создания запроса сначала нужно создать объект XMLHttpRequest, конструктор вызывается без аргументов.
const xhr = new XMLHttpRequest();
// Открываем запрос. Первый аргумент это метод (GET, POST ...), второй адрес, куда нужно отправить запрос. У данного метода есть еще аргументы, которые мы рассмотрим позже. В данном случае мы создаем POST запрос на тестовый сервер https://httpbin.org/post.
xhr.open('POST', 'https://httpbin.org/post');
// Отправляем запрос на сервер. Метод send() может принимать один аргумент - это тело запроса, если оно есть. Отправляем POST запрос, поэтому передаем в качестве аргумента объект FormData.
xhr.send(formData);
// После отправки запроса нам нужно использовать методы слушатели, которые будут асинхронно выполнены при наступлении соответствующего события. Это методы onload, onerror и onprogress - мы сами определяем их функции.
// onload - будет вызван, когда сервер вернет ответ. Это может быть положительный ответ сервера с кодом 200 (все хорошо), так и ошибка, например страница не найдена, тогда код будет 404. Мы должны обрабатывать такие ситуации сами.
xhr.onload = function () {
  if (xhr.status != 200) {
    // если статус не 200, то произошла ошибка
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    console.log(`user: ${xhr.response}`); // response - это ответ сервера
  }
};
// onprogress - функция будет вызываться пока запрос находится в процессе, и позволяет отслеживать ход процесса отправки запроса и получения ответа от сервера. Бывает полезна при отладке сложных запросов.
xhr.onprogress = function (event) {
  console.log(`Get from server: ${event.loaded} bytes`);
};
// onerror - функция будет вызываться если в запросе пошло что-то не так. НАпример нет соединения с сервером или ошибка в адресе запроса.
xhr.onerror = function () {
  console.log('Request error');
};
// Вывод из функции onprogress.
// Get from server: 1032 bytes
// Вывод из функции onload.
// user: {
// "args": {},
// "data": "",
// "files": {},
// "form": {
// "name": "Slava",
// "surname": "Belkin"
// },
// "headers": {
// "Accept": "*/*",
// "Accept-Encoding": "gzip, deflate, br",
// "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
// "Content-Length": "240",
// "Content-Type": "multipart/form-data;
// boundary=----WebKitFormBoundaryhzprTAMZWnth4PPa",
// "Dnt": "1",
// "Host": "httpbin.org",
// "Origin": "https://null.jsbin.com",
// "Referer": "https://null.jsbin.com/",
// "Sec-Ch-Ua": "\" Not A;Brand\";v=\"99\",
// \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
// "Sec-Ch-Ua-Mobile": "?0",
// "Sec-Fetch-Dest": "empty",
// "Sec-Fetch-Mode": "cors",
// "Sec-Fetch-Site": "cross-site",
// "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)
// AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93
// Safari/537.36",
// "X-Amzn-Trace-Id": "Root=1-608e859b-0d07ac850398c299447844c6"
// },
// "json": null,
// "origin": "95.26.251.191",
// "url": "https://httpbin.org/post"
// }

// Листинг 8
// Объект -> JSON.
const student = {
  name: 'Slava',
  surname: 'Belkin',
  age: 20,
  practice: {
    place: 'IKTG',
    hours: 47,
  },
};
console.log(JSON.stringify(student, null, 4));
// Вывод в консоль. Обратите внимание, что все ключи стали обернуты в кавычки.
// {
// "name": "Slava",
// "surname": "Belkin",
// "age": 20,
// "practice": {
// "place": "IKTG",
// "hours": 47
// }
// }

// Листинг 9
// JSON -> Объект.
console.log(
  JSON.parse(
    '{"name": "Slava", "surname": "Belkin", "age": 20, practice: {"place": "IKGT", "hours": 47}}'
  )
);
// {
// name: 'Slava',
// surname: 'Belkin',
// age: 20,
// practice: {
// place: 'IKTG',
// hours: 47,
// __proto__: Object
// },
// __proto__: Object
// }
console.log(JSON.parse('["Belkin", "Ivanov", "Petrov"]')); // ["Belkin", "Ivanov", "Petrov"]

// Листинг 10
const getUser = async (url) => {
  // Делаем запрос, и ждем его результат (указание await), который будет сохранен в константу response.
  const response = await fetch(url);
  // Выполняем еще один асинхронный метод, преобразования в текст, также ждем результат, который сохраняется в константу пользователь.
  const user = await response.text();
  console.log(user);
};
getUser('https://api.github.com/users/octocat');
// Вывод в консоль.
// {
// "login": "octocat",
// "id": 583231,
// ...
// }

// Листинг 11
const timerId = setInterval(() => {
  if (counter > amount) {
    // После того как наш счетчик достигнет нужного количества итераций, мы должны очистить таймер, чтобы итерации больше не выполнялись.
    clearInterval(timerId);
    console.log('End long calculations');
  }
  // Добавим вывод нашего счетчика через каждые 10000 итераций, чтобы видеть что наш код работает.
  if (counter % 10000 === 0) {
    console.log('working: ', counter);
  }
  const newDate = new Date(counter);
  counter++;
}, 0);
// Start long calculations
// working: 0
// working: 10000
// working: 20000
// ...
// End long calculations
