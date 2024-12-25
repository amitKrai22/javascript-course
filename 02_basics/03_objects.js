// object literals
const sym = Symbol("key1")

const jsuser = {
    "Full name": 'atom',
    age: 15,
    location: "pune",
    [sym]:"mykey1",
    emailId: 'atom@google.com',
    lastloggedIn: ['Monday','wednesday'],
    isLoggedIn: true,

}

// console.log(jsuser.emailId);
// console.log(jsuser['isLoggedIn']);
// console.log(jsuser["Full name"]);
// console.log(jsuser[sym]);

jsuser.emailId = "hydroatom@google.com"
// Object.freeze(jsuser)
jsuser.emailId = "amalgumatom@gpt.com"

// console.log(jsuser);
jsuser.greeting = function(){
    console.log("hello world");
    
}

jsuser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.location}`);
    
}
jsuser.greeting()
jsuser.greetingtwo()

