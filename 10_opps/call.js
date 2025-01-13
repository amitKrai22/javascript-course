function setUsername(username){
    // complex DB call
    this.username = username
}

function createUser(username, email, password){
    setUsername.call(this,username)
    this.email = email
    this.password = password
}

const coffee = new createUser('hyro', 'hydro@coffee.com', 321)
console.log(coffee);
