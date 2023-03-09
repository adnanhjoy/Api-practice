const userLoad = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => userDisplay(data.results))
}

const userDisplay = users => {
    const displayUser = document.getElementById('display-user');
    for (let user of users) {
        const div = document.createElement('div');
        div.classList.add('user')
        div.innerHTML = `
        <h3>Name: ${user.name.title} ${user.name.first} ${user.name.last} </h3>
        <p>Phone:${user.phone} Email: ${user.email}</p>
        <p>Location: ${user.location.country} City: ${user.location.city}</p>
        <p>Street: ${user.location.street.name} Number: ${user.location.street.number}</p>
        <p>Username: ${user.login.username} Password: ${user.login.password}</p>
`
        displayUser.appendChild(div)
        console.log(user)
    }
    // console.log(users)
}
userLoad()