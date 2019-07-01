//через if

/* 

let lang = ('ru', 'en');
if (lang == 'ru') {
    let wD = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
if (lang == 'en') {
    wD = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
console.log(wD);

*/


//через switch-case 

/*

let lang = ('ru', 'en');
switch (lang) {
    case 'ru':
        weekDay = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
        break;
    case 'en':
        weekDay = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
        break;
}
console.log(weekDay);

*/

// многомерный массив 

/*

let lang = ('ru', 'en');
weekDay = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
console.log(weekDay[lang]);

*/

// условие ? выражение1 : выражение2
/* 
У нас есть переменная namePerson. 
Если значение этой переменной “Артем” то вывести в консоль “директор”, 
если значение “Максим” то вывести в консоль “преподаватель”, 
с любым другим значением вывести в консоль “студент”
*/

let директор,
    преподаватель,
    студент;

let Артем = 'директор',
    Максим = 'преподаватель',
    Энибади = 'студент';


/* 
let namePerson = директор ? Максим : Артем
console.log(namePerson); 
*/

/* 
let namePerson = преподаватель ? Артем : Максим
console.log(namePerson);
*/

let namePerson = студент ? Максим : Энибади
console.log(namePerson);