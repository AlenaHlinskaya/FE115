// Задание 1
/*1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
элементы на экран.*/

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++ ) {
    document.write(arr[i]);
}

/*2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
быть положительными и отрицательными. Выведите на экран только отрицательные
числа, которые больше -10, но меньше -3.*/


// Задание 3
/*Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
массива. Запишите ее в переменную result и выведите.*/

let arr3 = [];


let result = 0;

let endArray = 57-23;
let j = 23;

for (let i = 0; i <= endArray; i++) {
	arr3[i] = j;
    result += j;
    j++;
}

console.log(arr3);
console.log(result);

/*let arr3_2 = [];
let i = 23;
while (i <= 57) {
    arr3_2[i] = i;
    console.log( arr3_2[i] );
    i++;
}*/






//Задание 4
//Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
//Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

let arr4 = [ '10', '20', '30', '50', '235', '3000' ];

for (let i = 0; i < arr4.length; i++) {

  let num = arr4[i];
  let char = num[0];
  if (char == 1 || char == 2 || char == 5) {
    console.log(num);
  }
}

//Задание 5
/*Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
дни недели, а выходные дни выведите жирным.*/

let arr5 = ['ПН' , 'ВТ', 'СР', 'ЧТ' , 'ПТ' , 'СБ' , 'ВС' ];
for (let i = 0; i < arr5.length; i++) {
    (arr5[i] == 'СБ' || arr5[i] == 'ВС' ) ? document.write(`<b> ${arr5[i]} </b>`) : document.write(arr5[i]);

}


//Задание 6
/*6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
и получите последний элемент массива, используя свойство length.*/

let arr6 = [1, 2, 3, 4, 5];
let LastElement = arr6[arr6.length - 1];
console.log(LastElement);



/*7. Запросите у пользователя по очереди числовые значения при помощи prompt и
сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
значение. Выведите получившийся массив на экран. Выполните сортировку чисел
массива, и выведите его на экран.*/

let numbers = [];

while (true) {

    let value = prompt('Введите число', 0);
    if (value === "" || value === false || !isFinite(value)) break;
    numbers.push(+value);
}
numbers.sort(function( a, b) {
    return a - b;
} );
document.write('<br>' + numbers + '<br>');

//Задание 8
/*Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
используя цикл while и метод reverse.*/

let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
let i = arr8.length-1;
while (i >= 0 ) {
    console.log( arr8[i] );
    i--;
}

let arr8_2 = [12, false, 'Текст', 4, 2, -5, 0];
arr8_2.reverse();
console.log (arr8_2);


//Задание 9
//9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
//целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].

let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
let empties = 0;
for (let i = 0; i<arr9.length; i++) {
    if (arr9[i] === undefined) empties +=1;
}

console.log('Количество пустых элементов в массиве:' + (empties));



//Задание 10
//Задание 11
