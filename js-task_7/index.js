// 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
// поиска и замены.

let string1 = 'aaa@bbb@ccc';
let newString1 = string1.replace(/@/g,'!');
console.log(newString1);

// 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
// дату в формат 31/12/2025.

let str2 = '2025-12-31';
let arr2 = str2.split('-');
console.log(arr2);
let newStr2 = arr2[2] + '/' + arr2[1] + '/' + arr2[0];
console.log(newStr2);
//почему не получилось поменять местами элементы с помощью группировки в replace()?

// 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
// «javascript» тремя разными способами (через substr, substring, slice).

let str3 = 'Я учу Javascript!';
console.log(str3.substr(2, 14)); //вторым параметром указывается длина
console.log(str3.substring(2, 16)); //возвращает часть строки между start и end
console.log(str3.slice(2, 16)); //возвращает часть строки от start(1-й параметр) до end(2-й параметр, не включая)

// 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let arr4 = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
        {
            for (let i = 0; i < arr4.length; i++)
                sum += arr4[i] ** 3;
            console.log(sum);
        };

console.log(Math.sqrt(sum));

// 5. Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
// c записалось положительное значение. Проверьте работу скрипта при a и b,
// равных соответственно 3 и 5, 6 и 1.

let a,
    b,
    c;
a = 3;
b = 5;
c = a - b;
console.log(Math.abs(c));

// 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Для решения этой задачи напишите функцию, которая будет добавлять 0
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
// сделает 01.09.2014).
let date = new Date();
function getZero(num){
	if (num > 0 && num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
}

console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());

// 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
// найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
// количество раз, буква 'a'.

let str7 ='aa aba abba abbba abca abea';
let reg7=/ab{1,}a/gi; 
console.log(str7.match(reg7));


// 8. Напишите ф-цию строгой проверки ввода номер телефона в
// международном формате (<код страны> <код города или сети> <номер
// телефона>). Функция должна возвращать true или false. Используйте
// регулярные выражения.

// 9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
// условия:
//     - весь адрес не должен содержать русские буквы и спецсимволы, кроме
//     одной «собачки», знака подчеркивания, дефиса и точки;
//     - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
//     имя может содержать только буквы, цифры, но не быть первыми и
//     единственными в имени;
//     - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
//     не может быть длиной менее 2 и более 11 символов.
   
//     Функция должна возвращать true или false. Используйте регулярные
//     выражения.


function checkEmail(email) {
    let regexp9 = /[A-za-z0-9]@[a-z].[A-za-z]{2,11}/gi;
    return regexp9.test(email)
};

console.log(checkEmail('test@mail.ru'));
