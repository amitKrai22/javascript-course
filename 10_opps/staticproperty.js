class User{
    constructor(username){
        this .username = username
    }

    logMe(){
        console.log(`Login usename is ${this.username}`);
        
    }
    static createId(){
        console.log(`123`);
        
    }
}
const atom = new User("atoms")
// atom.createId()

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const android = new Teacher("POCO", 'p@oco.com')
android.logMe()
// android.createId()
