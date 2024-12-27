const mynums = [1,2,3,4,5]

const intialize = 0

const total = mynums.reduce(function (acc,currval){
    return acc + currval 

},0)
// console.log(total);


const mytotal = mynums.reduce( (acc,curr) => acc+curr,intialize)

// console.log(mytotal);


const course = [
    {
        "itemName" : "JS course",
        "price" : 2999
    },
    {"itemName" : "Python course",
    "price" : 1999
    },
    {
        "itemName" : "Data Science course",
        "price" : 12999
    },
    {
        "itemName" : "NLP complete course",
        "price" : 999
    }
]

const totalprice = course.reduce( (acc,itemprice) => acc + itemprice.price, 0)

console.log(totalprice);
