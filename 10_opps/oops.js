const user = {
    username: 'coffee',
    loginCount: 6,
    signedIn: true,

    getUserDetails: function(){
        //console.log(`Login count: ${this.loginCount}`);
        //console.log(this);
        
        
    }
}

//console.log(user.username);
user.getUserDetails()

function User(username, loginCount, isSignedIn){
    this.username = username
    this.loginCount = loginCount
    this.isSignedIn = isSignedIn

    return this
}

const userOne = new User("carbon", 12, true)
const userTwo = new User("hydrogen", 14, false)
console.log(userOne);
console.log(userTwo);

// new - 1). when we use 'new' an empty object is created. 2). Constructor function created due to new keyword. 3). this use for current context and sent all arugument to
// function. 4). we contain result.

