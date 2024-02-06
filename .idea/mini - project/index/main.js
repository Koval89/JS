// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід
// на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

const foo = async () => {
    const json = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await json.json();
    console.log(users)
    const list = document.getElementById('list');

    for (const user of users){
        const div = document.createElement('div')
        const button = document.createElement('button');
        div.innerText=`${user.id} - ${user.name}`;
        button.innerText='details';
        div.appendChild(button)
        list.appendChild(div);

        button.onclick = () => {
            location.href = `../user-details/index.html?userId=${user.id}`;
        }

    }
}
void foo()
console.log(foo)






