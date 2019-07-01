//через if



let lang = ('ru', 'en');
if (lang == 'ru') {
    let wD = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
if (lang == 'en') {
    wD = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
console.log(wD);




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

let namePerson