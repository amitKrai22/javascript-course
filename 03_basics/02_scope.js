let a = 300
if (true){
    let a = 30
    const b = 20
    // console.log("inner: ",a);
    
}
// console.log(b);
// console.log(a);
// console.log();

function one(){
    const username = "atoms"

    function two(){
        const website = "google.com"
        console.log(username);
        
    }
    // console.log(website);
    two()
    
}

// one()

// ++++++++++++Interesting++++++++++++++//

// console.log(addOne(5))
function addOne(num){
    return num + 1
}

// console.log(addTwo(6)) //its give error
const addTwo = function(num){
                return num + 2
}


