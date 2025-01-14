// ES6

class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const coffee = new user('coffee', 'coffee@google.com', 321)

console.log(coffee.encryptPassword());


// behind the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}qwerty`
}

const tea = new User('tea', 'tea@google.com', 432)
console.log(tea.encryptPassword());
