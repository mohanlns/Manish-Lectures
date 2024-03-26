// *       *
// **     **
// ***   ***
// **** ****
// *********

// Solve this with simple for loop iteration

const n = 10;
for (var i = 0; i <= n; i++) {
    console.log(`${"*".repeat(i)}${" ".repeat((2*(n-i)))}${"*".repeat(i)}`);
}