// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення

// let grandRegister1 = 'hello world';
// let grandRegister2 = 'lorem ipsum';
// let grandRegister3 ='javascript is cool';
// let case1 = grandRegister1.toUpperCase();
// let case2 = grandRegister2.toUpperCase();
// let  case3 = grandRegister3.toUpperCase()
// console.log(case1,case2,case3)


// - Перевести до нижнього регістру настипні стрінгові значення

// let lowerCase1 =  'HELLO WORLD';
// let lowerCase2 = 'LOREM IPSUM';
// let lowerCase3 = 'JAVASCRIPT IS COOL';
// let case1 = lowerCase1.toLowerCase()
// let case2 = lowerCase1.toLowerCase()
// let case3 = lowerCase1.toLowerCase()
// console.log(case1, case2, case3)





// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let str1 = str.replaceAll(' ','');
// console.log(str1);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let split =str.split(' ')
// console.log(split)









// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// nums.sort (function (a, b){
//     return a - b;
// })
// console.log(nums);
//
// let nums1 = nums;
// nums1.sort(function (a, b) {
//     return b - a;
// })
// console.log(nums)







//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.sort(function (a, b) {
    if (a.monthDuration > b.monthDuration) {
        return 0;
    }
    if (a.monthDuration < b.monthDuration){
        return -1
    }
})
console.log(coursesAndDurationArray)
let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter)

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

let coursesAndDurationArrayId = [];
for (const courses of coursesAndDurationArray){
    courses.id = uuidv4();
    coursesAndDurationArrayId.push(courses)
}
console.log(coursesAndDurationArrayId)

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================





//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker