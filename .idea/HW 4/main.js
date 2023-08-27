// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function calc(a, b){
//     console.log(a*b);
// }
// calc(a=11, b=25)



// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function calc(π,R){
//     console.log(π*R*2)
// }
// calc(π=3.14, R=24)


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function calc(π,r,h){
//     console.log(2*π*r*h)
// }
// calc(π=3.14,r=5, h=7)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function writer (number,carBrand,status){
//     document.write(
//         `<div>
//             <h1>${number} ${carBrand}</h1>
//             <p>${status}</p>
//         </div>`
//     );
// }
// writer(1, 'BMW', 'sale')
// writer(2,'audi', 'notForSale')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function writer(product){
//     document.write(
//         `<ul>
//         <li>${product}</li>
//         <li>${product}</li>
//         <li>${product}</li>
//         </ul> `
//     )
// }
// writer('coffee')


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function printerArray(array) {
//     for (const item of array) {
//         console.log(item);
//     }
// }
//
// let cars = [
//     {brand: 'BMW', age: 2020, status: false},
//     {brand: 'audi', age: 2021, status: true},
//     {brand: 'jeep', age: 2023, status: true},
//     {brand: 'reno', age: 2002, status: false},
//     {brand: 'lada', age: 1977, status: true},
// ];
// printerArray(cars);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function printerArray(array) {
//     for (const item of array) {
//         console.log(item);
//     }
// }
//
// let users = [
//     {name: 'vasya', age: 31, id: 1},
//     {name: 'petya', age: 30, id: 2},
//     {name: 'kolya', age: 29, id: 3},
//     {name: 'olya', age: 28, id: 4},
//     {name: 'max', age: 30, id: 5},
//     {name: 'anya', age: 31, id: 6},
//
// ];
// printerArray(users);



// - створити функцію яка повертає найменьше число з масиву

// function userFilter(users) {
//     let filteredUsers = [];
//     for (const user of users) {
//         if(user.id<=1){
//             filteredUsers.push(user)
//         }
//     }
//     return filteredUsers;
// }
//
//
// let users = [
//     {name: 'vasya', age: 31, id: 1},
//     {name: 'petya', age: 30, id: 2},
//     {name: 'kolya', age: 29, id: 3},
//     {name: 'olya', age: 28, id: 4},
//     {name: 'max', age: 30, id: 5},
//     {name: 'anya', age: 31, id: 6},
//
// ];
// let filter = userFilter(users);
// console.log(filter);


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sum(){
//     const arr = Array.from(arguments)
//     let result = 0
//     for (const numder of arr){
// result = result + numder
//     }
//     console.log(result)
//
// }
//
// sum(1,2,10)
// sum(22,11,35)


/