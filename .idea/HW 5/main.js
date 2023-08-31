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


// const someItem= (arr) => {
//     for(const item of arr){
//         console.log('item:', item)
//     }
// }
// someItem([25,36,150,'petya', 'olya'])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// const writer = (number,carBrand,status) =>{
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

// const writer = (product) =>{
//     document.write(
//         `<ul>
//         <li>${product}</li>
//         <li>${product}</li>
//         <li>${product}</li>
//         </ul> `
//     )
// }
// writer('coffee')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// const writer1 = (product, number) =>{
//     document.write(`<ul>`);
//     for (let i=0;i < number; i++){
//     document.write(`<li>${product}</li>`);
//     }
//     document.write(`</ul>`);
// }
// writer1('coffee 1', 6)
// writer1('milk 2', 3)



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// const printerArray = (array) => {
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


// let users = [
//     {name: 'vasya', age: 31, id: 1},
//     {name: 'petya', age: 30, id: 2},
//     {name: 'kolya', age: 29, id: 3},
//     {name: 'olya', age: 28, id: 4},
//     {name: 'max', age: 30, id: 5},
//     {name: 'anya', age: 31, id: 6},
//
// ];
// const printer = (array) =>{
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



// створити функцію яка повертає найменьше число з масиву

// const min = (arr)=>{
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++){
//         if(arr[i] < min){
//             min=arr[i];
//         }
//     }
//     return min;
//
// }
// const  result = min ([1,55,25,13,56,-10])
// console.log('number', result)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = (arr) =>{
    let result = 0
    for (let i = 0; i < arr.length; i++){
result = result + arr[i]
    }
    return result;

}

console.log(sum([1,2,10]))
console.log(sum([22,11,35]))


























