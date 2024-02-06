console.log(location)

const userId = new URL (location.href).searchParams.get('userId');
console.log(userId)

const foo = async () => {
    const json = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await json.json();
    const details = document.getElementById('det');
    const ul = document.createElement('ul');
    const id = document.createElement('li');
    const username = document.createElement('li');
    const email = document.createElement('li');
    const phone = document.createElement('li');
    const street = document.createElement('li');
    const suite = document.createElement('li');
    const city = document.createElement('li');
    const zipcode = document.createElement('li');
    const lat = document.createElement('li');
    const lng = document.createElement('li');
    const website = document.createElement('li');
    const companyName = document.createElement('li');
    const catchPhrase = document.createElement('li');
    const bs = document.createElement('li');

    id.textContent = `id: ${user.id}`;
    username.textContent = `username: ${user.username}`;
    email.textContent = `email: ${user.email}`;
    phone.textContent = `phone: ${user.phone}`;
    street.textContent = `street: ${user.address.street}`;
    suite.textContent = `suite: ${user.address.suite}`;
    city.textContent = `city: ${user.address.city}`;
    zipcode.textContent = `zipcode: ${user.address.zipcode}`;
    lat.textContent = `lat: ${user.address.geo.lat}`;
    lng.textContent = `lng: ${user.address.geo.lng}`;
    website.textContent = `website: ${user.website}`;
    companyName.textContent = `companyName: ${user.company.name}`;
    catchPhrase.textContent = `catchPhrase: ${user.company.catchPhrase}`;
    bs.textContent = `bs: ${user.company.bs}`;
    details.appendChild(ul);

    ul.append(id, username, email, phone, street, suite, city, zipcode, lat, lng, website, companyName, catchPhrase, bs)
    console.log(user)
}
void foo()






