// named iife
(function coffee(){
    console.log("DB Connected");
    
})(); // we use iife to avoid global variable pullution.


// unnamed iife
((name) => {
    console.log(`DB Connected again ${name}`);
    
})('atoms')