//     *       *
//    ***     ***
//   *****   *****
//  ******* *******
// *****************
//  ******* *******
//   *****   *****
//    ***     ***
//     *       *

// Solve this with simple for loop iteration


const n = 5;
for (var i = 0; i <= n; i++) {
    console.log(`${" ".repeat(n-i)}${"*".repeat(2*i+1)}${" ".repeat((n-i)*2)}${"*".repeat(2*i+1)}`);
}

for (var i = 1; i <= n; i++) {
    console.log(`${" ".repeat(i)}${"*".repeat((n-i)*2+1)}${" ".repeat((i)*2)}${"*".repeat((n-i)*2+1)}`);
}