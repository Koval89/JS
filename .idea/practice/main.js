// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

// let string1 = ('hallo');
// console.log(string1)
//
// let string2 = ('owu');
// console.log(string2)
//
// let string3 = ('com');
// console.log(string3)
//
// let string4 = ('ua');
// console.log(string4)
//
// let number = (1);
// console.log(number)
//
// let number1 = (10);
// console.log(number1)
//
// let number2 = (-999);
// console.log(number2)
//
// let number3 = (123);
// console.log(number3)
//
// let number4 = (3.14);
// console.log(number4)
//
// let number5 = (2.7);
// console.log(number5)
//
// let number6 = (16);
// console.log(number6)
//
// let boolean = (true);
// console.log(boolean)
//
// let boolean1 = (false);
// console.log(boolean1)



//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

// let firstName = 'Olexandr';
// let middleName = 'Olexandrovich';
// let lastName = 'Kostiuk';
// let spaces = ' ';
//
// console.log(firstName + spaces + middleName + spaces + lastName)
//

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof (a))
// console.log(typeof (b))
// console.log(typeof (c))
//


// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль


// let userName = prompt ('name');
// console.log(userName)
//
// let userLastName = prompt ('lastName');
// console.log(userLastName)
//
// let userAge = prompt ('age');
// console.log(userAge)


//
// ------------------------------------------------------------------------------------------------------------------------------------------------


// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let user = [
//     'sergey',
//     'olya',
//     'dima',
//     'vanya',
//     'vinny',
//     'pyatachok',
//     'kolya',
//     'iruna',
//     'katya',
//     'masha'
// ]
// console.log(user[0])
// console.log(user[1])
// console.log(user[2])
// console.log(user[3])
// console.log(user[4])
// console.log(user[5])
// console.log(user[6])
// console.log(user[7])
// console.log(user[8])
// console.log(user[9])
//
// user.wife = {
//     age: 25,
//     name: 'snake'
// }
// console.log(user.wife.age)
// console.log(user.wife.name)
// console.log(user.wife)
//
// user.sun = {
//     age: 18,
//     name: 'curt',
//     skills:['js', 'node', 'c#',]
// }
//
// console.log(user)
// console.log(user.sun.skills[2])
// console.log(user.sun.name)





// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.


// let book = {
//     title: 'cars',
//     pageCount: 25,
//     gerne: 'race',
// }
// console.log(book)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// let books = {
//     title: ['cars'],
//     pageCount: 25,
//     gerne: 'race',
//     authors: [name = 'piter', age = 36]
// }
// console.log(books)
//
// books.authors[2] = {
//     color:'blue'
// }
//
// books.title.push =  ['toys']
// console.log(books)



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//

// let user=[
//     {name:'sasha',username:'sasha',password:'qwe'},
//     {name:'nickolas',username:'nickolas',password:'asd'},
//     {name:'dasha',username:'dasha',password:'zxc'},
//     {name:'julia',username:'julia',password:'xssw'},
//     {name:'dima',username:'dima',password:'vfrsw'},
//     {name:'gosha',username:'gosha',password:'rtyhgb'},
//     {name:'masha',username:'masha',password:',lmkj'},
//     {name:'sergey',username:'sergey',password:'vfgytr'},
//     {name:'jora',username:'jora',password:'njiuyu'},
//     {name:'vadim',username:'vadim',password:'jhggfd'},
// ]
// console.log(user[0].password)
// console.log(user[1].password)
// console.log(user[2].password)
// console.log(user[3].password)
// console.log(user[4].password)
// console.log(user[5].password)
// console.log(user[6].password)
// console.log(user[7].password)
// console.log(user[8].password)
// console.log(user[9].password)
// let sasha=user[0]
// console.log(sasha.password)
// let nickolas=user[1]
// console.log(nickolas.password)
// let dasha=user[2]
// console.log(dasha.password)
// let julia=user[3]
// console.log(julia.password)
// let dima=user[4]
// console.log(dima.password)
// let gosha=user[5]
// console.log(gosha.password)
// let masha=user[6]
// console.log(masha.password)
// let sergey=user[7]
// console.log(sergey.password)
// let jora=user[8]
// console.log(jora.password)
// let vadim=user[9]
// console.log(vadim.password)






//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = -3
//
// if (x!==0) {
//     console.log(true)
// } else{
//     console.log(false)
// }






// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = prompt ('яка зараз година')
// if (time >= 0 && time <=15){
//     console.log(1)
// } else if (time >= 16 && time <=30 ){
//     console.log(2)
// }else if (time >= 31 && time <= 45 ) {
//     console.log(3)
// } else if (time >= 46 && time <= 60) {
//     console.log(4)
// } else {
//     console.log('ERROR')
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


// let day = prompt ('write a date')
//
// if (day >=1 && day <=10) {
//     console.log(1)
// } else if (day>=11 && day <=20) {
//     console.log(2)
// } else  if (day >=21 && day<=30) {
//     console.log(3)
// } else {
//     console.log('ERROR')
// }






// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).


// let  plans = +prompt('write number of a day')
// switch (plans){
//     case 1 :
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4 :
//         console.log('Thursday');
//         break;
//     case 5 :
//         console.log('Friday');
//         break;
//     case 6 :
//         console.log('Saturday');
//         break;
//     case 7 :
//         console.log('Sunday');
//         break;
//     default :
//         console.log('Error')
// }



//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let number1 = 20;
// let number2 = + prompt ('enter number', 20);
// if (number1 === number2){
//     console.log('Числа рівні');
// }else if(number1 > number2){
//     console.log('MAX is: ' +  number1);
// }else{
//     console.log('MAX is: ' + number2);
// }




//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// let x = ''
//
// if (x!=='red' || x===false) {
//     console.log('default')
// }
// console.log(x)


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration >= 5) {
    console.log('Super')
} else {
    console.log('you may better')
}

if (coursesAndDurationArray[1].monthDuration >= 5) {
    console.log('Super')
} else {
    console.log('you may better')
}

if (coursesAndDurationArray[2].monthDuration >= 5) {
    console.log('Super')
} else {
    console.log('you may better')
}

if (coursesAndDurationArray[3].monthDuration >= 5) {
    console.log('Super')
} else {
    console.log('you may better')
}

if (coursesAndDurationArray[4].monthDuration >= 5) {
    console.log('Super')
} else {
    console.log('you may better')
}

if (coursesAndDurationArray[5].monthDuration >= 5) {
    console.log('Super')
} else {
    console.log('you may better')
}