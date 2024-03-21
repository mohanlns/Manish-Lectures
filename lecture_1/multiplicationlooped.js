// Yaha p humlog sum of multiple times nikalenge.


// all variables
//  Onject's are key value pairs.
const variables = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6
};

// Types of loop?
// for, foreach, filter, map

let multiplications = 1

console.log(Object.keys(variables));
Object.keys(variables).forEach(resp => {
    {
        multiplications *= variables[resp];
        // console.log(variables[resp], resp);
    }
}) 

// Type your code here.

// console.log("Total of all the values: ",multiplications);



// variables = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     f: 6
// }; // Object Type
// variables = [ 'a', 'b', 'c', 'd', 'e', 'f' ] // List type

// loop chalane k liye hume initial value aur final value

// let vardata = 6;

// let multi = 1
// for (let i = 1; i <= vardata;  i++) {
//     i =1,2,3,4,5,6;
//     multi *= i;
// }

// console.log("Multiplication Value:", multi);

let listData = ["name", "info", "details", "values", "hobbies", "data", "xyz"]; // [7MB]

// console.log(listData[0], listData[1], listData[2], listData[3], listData[4], listData[5]);

for (let i = 0; i < listData.length; i++) {
    console.log(i);
    // ["name", "info", "details", "values", "hobbies", "data", "xyz"] = [name] jab i ki value 1 thi [7MB]
    // ["name", "info", "details", "values", "hobbies", "data", "xyz"] = [info] jab i ki value 2 thi [7MB]
    //. ...........
    // ...........
    // ["name", "info", "details", "values", "hobbies", "data", "xyz"] = [xyz]  [7MB] = total memory  = 49 MB
}

// inbuild function foreach function
listData.forEach(a => {
    console.log(a) // har baar diffrent values layega [1 MB] total of [7 MB]
});


// 1: time complexcity
// 2: space complexcity