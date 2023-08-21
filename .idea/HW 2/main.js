/*
Масиви та об'єкти:
- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
*/
// let listCars =[
//     "bentley",
//     "ferrari",
//     "opel",
//     "reno",
//     "volkswagen",
//     "jeep",
//     "geely",
//     "Audi",
//     "Acura",
//     "Aston Martin"
// ]
// console.log(listCars);
// console.log(listCars[1]);
// console.log(listCars.length)

// let boocks=[
//     {title:'The Little Prince',pageCount: 100,genre:'story'},
//     {title: 'Red sails',pageCount: 70, genre: 'A story extravaganza'},
//     {title: 'Three musketeers',pageCount: 95,genre: 'novel'}
// ];
// console.log(boocks)

// let boocks=[
//     {title:'The Little Prince',pageCount: 100,genre:'story',authors:{name:'A. de Saint-Exupéry', age:55}},
//     {title: 'Red sails',pageCount: 70, genre: 'A story extravaganza',authors: {name:'A. Green', age:48}},
//     {title: 'Three musketeers',pageCount: 95,genre: 'novel',authors: {name:'A. Dumas', age:39}}
// ]
// console.log(boocks)

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

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let x=9
// if (x!==0) {
//     console.log('true');
// }else{
//     console.log('false');
// }
// let x = prompt('enter x')
// if (x==1){
//     console.log(true);
// }else if (x==0){
//     console.log(true);
// }else if (x==-3){
//     console.log(true);
// }else {
//     console.log(false)
// }

// let time=prompt('enter time')
// if (time>=0 && time<=15){
//     console.log('first part')
// } else if (time>=16 && time<=30){
//     console.log('second part')
// }else if (time>=31 && time<=45){
//     console.log('third part')
// }else if (time>=46 && time<=59){
//     console.log('fourth part')
// }else {
//     console.log(Error)
// }

// let day=prompt('enter the number of the month')
// if (day>=1 && day<=10){
//     console.log('first decade')
// }else if (day>=11 && day<=20){
//     console.log('second decade')
// }else if (day>=21 && day<=31){
//     console.log('third decade')
// }else {
//     console.log(Error)
// }

// let schedule=+prompt('schedule')
// switch (schedule){
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//     default :
//         console.log(Error)
// }


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// let x =prompt('any value') || "default";
// console.log(x);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray)
if (coursesAndDurationArray[0].monthDuration >=5){
    console.log('Super')
}else {
    console.log('not great')
};
if (coursesAndDurationArray[1].monthDuration >=5){
    console.log('Super')
}else {
    console.log('not great')
};
if (coursesAndDurationArray[2].monthDuration >=5){
    console.log('Super')
}else {
    console.log('not great')
};
if (coursesAndDurationArray[3].monthDuration >=5){
    console.log('Super')
}else {
    console.log('not great')
};
if (coursesAndDurationArray[4].monthDuration >=5){
    console.log('Super')
}else {
    console.log('not great')
};
if (coursesAndDurationArray[5].monthDuration >=5){
    console.log('Super')
}else {
    console.log('not great')
};
