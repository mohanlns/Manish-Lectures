//     *
//    ***
//   *****
//  *******
// *********

1
3
5
7
9

// 2*i+1 => 0,1 => 1,3 => 2,5 => 3,7 => ................
const n = 9;
for (var i = 0; i < n; i++) {
    console.log(" ".repeat(n-i),"*".repeat(2*i+1));
    // n = 0 => " " * (5-0) =>5 and "*" (2*0+1)=>1;
    // n = 1 => " " * (5-1) =>4 and "*" (2*1+1)=>3;
    // n = 2 => " " * (5-2) =>3 and "*" (2*2+1)=>5;
}