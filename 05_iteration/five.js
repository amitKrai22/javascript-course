const coding = ['js', 'py', 'ruby', 'java', 'cpp']

coding.forEach(function (item) {
    // console.log(item);
    
});

coding.forEach( (items) =>{
    // console.log(items);
    
})

// function printme(item){
//     console.log(item);
    
// }

// coding.forEach(printme)

coding.forEach((item,index,arr) =>{
    // console.log(item,index,arr);
    
})

const mycoding = [
    {
        languageName: 'Python',
        fileExtension: 'py',
    },
    {
        languageName: 'Javascript',
        fileExtension: 'js',
    },
    {
        languageName: "c++",
        fileExtension: "cpp"
    }

]

mycoding.forEach( (item) =>{
    console.log(item.languageName);
    
})