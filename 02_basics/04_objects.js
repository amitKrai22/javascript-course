// const tinderUser = new Object() // singleton object

const tinderUser = {} // Non-Singleton object

tinderUser.id = "123qwer"
tinderUser.name = "atoms"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// *****nested object******//

const regularUser = {
    email:"someuser@google.com",
    fullname:{
        userfullname:{
            firstname:"carbon",
            lastname: "atoms",
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a", 2:"b",3:"c"}
const obj2 = {4:"d", 5:"e", 6:"f"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1,obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const user = [
    {
        email: "some@gpt.com",
        isLoggedIn: true,
    },
    {
        fname: "carbon",
        lname: "atoms",
        location: "earth",
    },
    {

    },
]

// console.log(user[0].email)
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));

// ****Destutruing****//

const course = {
    courseName : "JS oneShot",
    courseDuration: "1hr",
    courseInstrctor: "Periodic",
}

// course.courseInstrctor
const {courseInstrctor : Instructor} = course
// console.log(courseInstrctor);

console.log(Instructor);

