class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get password(){
        return (`${this._password}atom`)
    }
    set password(value){
        this._password = value
    }
}

const atoms = new User('a@TransformStream.ai', 'abx')
console.log(atoms.password);
