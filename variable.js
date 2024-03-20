

// Kind of variable's value
// There is 3 kind of variables available in node js.
// 1: let => These variables are reassignable
// 2: var => These variables are reassignable
// 3: const => const is not re assignable.


let variable1 = 2;
var variable2 = 3;
const variable3 = 4;

variable1 += 1; // is equal to variable1 = variable1 + 1;
variable2 += 1;
// variable3 += 1; // this part will throw an error of TypeError.
// same java use final keyword

console.log(variable1, variable2, variable3)
