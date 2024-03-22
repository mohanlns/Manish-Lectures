//   *
// *****
//   *
// *****
//   *
// *****
//   *
// *****
//   *


const n = 5;
for (var i = 1; i <= n; i++) {
    // i%2 or i%2 == true or i%2 == 1
    if (i%2 == 1) { // jab bhi condition ki value 1 hogi if condition k andar ka print hoga
        console.log(`${" ".repeat(2)}${"*".repeat(1)}`);
    } else {
        console.log(`${"*".repeat(5)}`);
    }
    // console.log(`${i}`);
}

// how % sign works.
// jab i ki value 1 hogi tab 1%2 = 1
// jab i ki value 2 hogi tab 2%2 = 0
// jab i ki value 3 hogi tab 3%2 = 1
// jab i ki value 4 hogi tab 2%2 = 0

// Jo "0" hota h wo represent karta h false ko
// Jo "1" hota h wo represent karta h true ko
