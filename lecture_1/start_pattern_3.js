// *********
//  *******
//   *****
//    ***
//     *


const n = 9;
for (var i = 0; i <= n; i++) {
    console.log(`${" ".repeat(i)}${"*".repeat((2*(n-i))+1)}`);
}