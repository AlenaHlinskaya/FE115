//Задача 1
//1. Выведите числа от 1 до 50 и от 35 до 8.

for (i=1; i<=50; i++) {console.log(i)}
i=1;
while (i<=50) {
    console.log(i);
    i++;
}

i=1;

do {
    console.log(i);
    i++;
} while (i<=50)

for (i=35; i>=8; i--) {console.log(i)}
i=35;

while (i>=8) {
    console.log(i);
    i--;
}

i=35

do {
    console.log(i);
    i--;
} while (i>=8);
// Задача 2
/*2. Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
тегом <br /> друг от друга, чтобы получить столбец, а не строку.*/

i=89;
while (i>=11) {
    document.write(i + '<br>' );
    i--;
}


//Задача 3
//3. С помощью цикла найдите сумму чисел от 0 до 100.

let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
 }
 console.log(sum);


// Задача 4
/*4. Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
(1+2+3).*/

sum = 0;
for (i=1; i<=5; i++) {
    sum = sum + i;
    console.log( "В числе" + i + "Сумма чисел равна" + sum);
}


// Задача 5

/*5. Выведите чётные числа от 8 до 56. Решить задание через while и for.*/

for(let i=8; i<=56; i++) {
    if (i % 2 == 1) continue;
    console.log(i);
}

i=8;
while (i<=56) {
    if (i % 2 == 0) console.log(i);

    i++;
}


//Задача 6
/*6. Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:*/

for (i=2; i<=10; i++) {
    
    for (j=2; j<=10; j++) {
       console.log(`${i} * ${j} = ${i*j}`);
    }
}


/*7. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
для этого (итерация - это проход цикла), и запишите его в переменную num.*/

n = 1000;
num = 0;

while (n >= 50) {
    n /=2;
    num ++;
}

console.log(n); //результат деления
console.log(num); //количество итераций

/*8. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
может ввести отрицательное значение.*/


