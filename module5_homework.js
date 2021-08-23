//Exercise 1
let value = prompt('Введите значение');
value = +value;

if (typeof value != 'number') {
    alert('Упс, кажется, Вы ошиблись');
} else if (isNaN(value)) {
    alert('Упс, кажется, Вы ошиблись');
} else if (value % 2 === 0) {
    alert('Четное число');
} else {
    alert('Нечетное число');
}

//Exercise 2
let x = prompt('Введите значение х');

if (typeof x === 'number') {
    alert(x + ' - число');
} else if (typeof x == 'string') {
    alert(x + ' - строка');
} else if (typeof x == 'boolean') {
    alert(x + '- логический тип');
} else {
    alert(x + 'Тип x не определен');
}

//Exercise 3
let str = 'hello';

str = str.split("");
str = str.reverse();
str = str.join("");

console.log(str)

//Exercise 4
let x = Math.floor(Math.random() * 101);

console.log(x)

//Exercise 5
let arr = ['coffee', 'tea', 'juice', 'pop'];

alert('Длина массива: ' + arr.length + ' элемента');
arr.forEach(function (item, i, arr) {
    alert(i + ":" + item + "(массив:" + arr + ")");
});

//Exercise 6
let arr = ['coffee', 'tea', 'juice', 'pop'];

for (let i = 0; i < 4; i = i + 1) {
    if (arr[i] === arr[i]) {
        alert(true);
    } else {
        alert(false);
    }
}

//Exercise 7
let zeros=0;
let strs=0;
let countables=0;
let uncountables=0;
let nulls=0;

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, 'coffee', 'tea', 'juice'];

for (i = 0; i<array.length; i++) {
    if (typeof array[i] == 'string') {
        strs++;
    } else if (array[i]==null){
        nulls++;
    } else if (array[i]==0) {
        zeros++;
    } else if (array[i] % 2 === 0) {
        countables++;
    } else {
        uncountables++;
    }   
}

alert(`Нулей - ${zeros} \n Строк - ${strs} \n Nulls - ${nulls} \n Четных - ${countables} \n Нечетных - ${uncountables}`)

//Exercise 8
let drink_price = new Map([
    ["Coffee", "2 dollars"],
    ["Tea", "1 dollar"],
    ["Juice", "1,5 dollars"]
]);

for (let item of drink_price){
    console.log(`Ключ - ${item} - Значение`);
};