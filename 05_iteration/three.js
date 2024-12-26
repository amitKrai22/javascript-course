// for of

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    console.log(num);
        
}

// Maps

const map = new Map()
map.set('In', 'India')
map.set('Pak', 'Pakistan')
map.set('Fr', 'France')

// console.log(map);

for (const [key,value] of map ){
    // console.log(key, ":-", value);
    
}

const myobj = {
    game1 : 'IGT',
    game2 : 'NFS',
}
for (const [key,value] of myobj){
    console.log(key , value); // not work on object
    
}
