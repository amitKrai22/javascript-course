let myhero = ['thor','spiderman']

let heroPower = {
    thor: 'hammer',
    spiderMan: 'sling',

    getSpidermanPower: function(){
        console.log(`spidy power is ${this.spiderMan}`);
        
    }
}

Object.prototype.hero = function(){
    console.log('There is no hero exist.');
    
}

Array.prototype.heyHero = function(){
    console.log('Heroes are responding.');
    
}
// heroPower.hero()
myhero.hero()
myhero.heyHero()
// heroPower.heyHero()


//Inheritance 

const user = {
    name: "coffee",
    email: "coffee@yahoo.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport= {
    isAvilable: false
}

const TaSupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern Syntax

Object.setPrototypeOf(TaSupport,Teacher)

let anotherUser = "coffeewithcode       "

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True length is: ${this.trim().length}`);
    
}
anotherUser.trueLength()