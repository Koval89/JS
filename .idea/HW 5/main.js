// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let calc=(a, b) => a*b;
//
// console.log(calc(a=11, b=25));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let calc = (π, R) => π*R*2;
//
// console.log(calc(π=3.14, R=24));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let calc = (π,r,h) => 2*π*r*h;
//
// console.log(calc(π=3.14,r=5, h=7));

// - створити функцію яка приймає масив та виводить кожен його елемент


// let item = () => console.log([25,36,45,'petya','olya'])
// item()



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let writer = (product) =>
//     document.write(
//         `<ul>
//         <li>${product}</li>
//         <li>${product}</li>
//         <li>${product}</li>
//         </ul> `
//     )
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
//
// // const printer = (array)  => {
// //     if (array.length){
// //         for (const item of array){
// //             console.log(item)
// //         }
// //     }
// // }
// // printer(cars)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// let users = [
//     {name: 'vasya', age: 31, id: 1},
//     {name: 'petya', age: 30, id: 2},
//     {name: 'kolya', age: 29, id: 3},
//     {name: 'olya', age: 28, id: 4},
//     {name: 'max', age: 30, id: 5},
//     {name: 'anya', age: 31, id: 6},
//
// ];
// function printer(array){
//     for (const users of array){
//         document.write(`
//         <div>
//              <p>name: ${users.name}</p>
//              <p>age: ${users.age}</p>
//              <p>id: ${users.id}</p>
//         </div>
//         `)
//     }
// }
// printer(users)
//
// const print =(array) => {
//     for (const item of array){
//         console.log(item)
//     }
// }
// print(users)



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sum(){
//     const arr = Array.from(arguments)
//     let result = 0
//     for (const number of arr){
// result = result + number
//     }
//     return result;
//
// }
// console.log(sum(1,2,10))
// console.log(sum(22,11,35))
//
// const sum1 = (num1, num2, num3) => {
//     return num1+num2+num3;
// }
// console.log(sum1(1,2,10))
// console.log(sum1(22,11,35))
