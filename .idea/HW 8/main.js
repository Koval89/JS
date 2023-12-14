// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [
    new User(1,'Maksym','Fedenko','fedenko@gmail.com','+380993564412'),
    new User(2, 'Tumyr', 'Dudka', 'dudka@gmail.com',  '+380995684412'),
    new User(3, 'Yanna','Chernok', 'Chernok@gmail.com', '+380993564455'),
    new User(4, 'Diana', 'Khorotenko', 'Khorotenko@gmail.com',  '+380993564412'),
    new User(5, 'Andriy', 'Redka', 'Redka@gmail.com','+380993564498'),
    new User(6,  'Valentun', 'Dolya', 'Dolya@gmail.com',  '+380993565492'),
    new User(7,  'Evgen', 'Romanko', 'romanko@gmail.com',  '+380993577412'),
    new User(8,  'Olya', 'Chrsmko', 'Chrsmko@gmail.com',  '+380993564999'),
    new User(9,  'Egor', 'Tkach', 'Tkach@gmail.com',  '+380993564568'),
    new User(10,  'Jora', 'Charko', 'Charko@gmail.com',  '+380664589921'),
]
console.log(users)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//

const filteredUsers = users.filter((user)=>!(user.id%2))
console.log(filteredUsers)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
const sorteredUsers = users.sort((a, b)=>a.id - b.id)
console.log(sorteredUsers)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

function Client(id, name, surname, email, phone, order) {
    User.call(this, id, name, surname, email, phone)
    this.order = order;
    }

const client = [
    new Client(1,'Maksym','Fedenko','fedenko@gmail.com','+380993564412',[
        'milk', 'meat', 'tea', 'coffee', 'sugar'
    ]),
    new Client(2, 'Tumyr', 'Dudka', 'dudka@gmail.com',  '+380995684412',[
        'milk'
    ]),
    new Client(3, 'Yanna','Chernok', 'Chernok@gmail.com', '+380993564455',[
        'milk', 'meat'
    ]),
    new Client(4, 'Diana', 'Khorotenko', 'Khorotenko@gmail.com',  '+380993564412',[
        'milk', 'meat', 'tea'
    ]),
    new Client(5, 'Andriy', 'Redka', 'Redka@gmail.com','+380993564498',[
        'milk', 'meat', 'tea', 'coffee'
    ]),
    new Client(6,  'Valentun', 'Dolya', 'Dolya@gmail.com',  '+380993565492',[
        'milk', 'meat', 'tea', 'coffee', 'sugar'
    ]),
    new Client(7,  'Evgen', 'Romanko', 'romanko@gmail.com',  '+380993577412',[
        'meat', 'tea', 'coffee', 'sugar'
    ]),
    new Client(8,  'Olya', 'Chrsmko', 'Chrsmko@gmail.com',  '+380993564999',[
         'tea', 'coffee', 'sugar'
    ]),
    new Client(9,  'Egor', 'Tkach', 'Tkach@gmail.com',  '+380993564568',[
        'coffee', 'sugar'
    ]),
    new Client(10,  'Jora', 'Charko', 'Charko@gmail.com',  '+380664589921',[
        'sugar'
    ]),
]
console.log(client);



// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
const sortedArr = client.sort((a, b) => a.order.length - b.order.length);
console.log(sortedArr)



//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, producer, year, maxSpeed, volume) {
    this.modet = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        console.log('***** INFO *****');
        for (const key in this) {
            if (typeof this[key] === 'function') {
                continue;
            }
            console.log(`${key.toUpperCase()}: `, this[key]);
        }
        console.log('***** INFO *****');
    }
    this.increaseMaxSpeed = function (addedSpeed) {
        this.maxSpeed = this.maxSpeed + addedSpeed;
    }
    this.changedYear = function (newYear) {
        this.year = newYear
    }
    this.addDriver = function (addedDriver) {
        this.driver = addedDriver;
    }
}

const car1  = new Car('x5', 'BMW', 2010, 110,5.3)
car1.drive();
car1.info();
car1.increaseMaxSpeed(30);
car1.info()
car1.changedYear(2025);
car1.info();

function Driver (name, age, exp) {
    this.name = name;
    this.age = age;
    this.exp = exp;
}
const driver = new Driver ('Vasya', 2009,5)
car1.addDriver(driver);
car1.info();




// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2  {
    constructor(model, producer, year, maxSpeed, volume) {
        this.modet = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
    drive()  {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info() {
        console.log('***** INFO *****');
        for (const key in this) {
            if (typeof this[key] === 'function') {
                continue;
            }
            console.log(`${key.toUpperCase()}: `, this[key]);
        }
        console.log('***** INFO *****');
    }
    increaseMaxSpeed(addedSpeed) {
        this.maxSpeed = this.maxSpeed + addedSpeed;
    }
    changedYear(newYear) {
        this.year = newYear
    }
    addDriver(addedDriver) {
        this.driver2 = addedDriver;
    }
}

const car2  = new Car2('A6', 'Audi', 2024, 170,6)
car2.drive();
car2.info();
car2.increaseMaxSpeed(30);
car2.info()
car2.changedYear(2025);
car2.info();

class Driver2 {
    constructor(name, age, exp) {
        this.name = name;
        this.age = age;
        this.exp = exp;

    }
}
const driver2 = new Driver2 ('Filiya', 2015,3)
car2.addDriver(driver2);
car2.info();










// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку