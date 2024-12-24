// console.log(2 > 1);
// console.log(1 == 2);
// console.log(3 < 2);
// console.log(3 <= 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*
The reason is that an equality check == and comparision > < >= <= work differently.
Comparision convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false
*/

// === => strict check mean checking of value as well as datatypes




