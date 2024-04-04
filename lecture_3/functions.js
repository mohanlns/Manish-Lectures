// Q: What is function?
// A: function wo collection of block.

// pattern of the function 
// const startPatern_1 = async () => {
// coding information
// }

// work1  ek functin me define kar denge.

const startPatern_1_demo = async () => { // function without parameters
    // *
    // **
    // ***
    // ****
    // *****
    console.log("Hello world!", "startPatern_1_demo");
}

// *
// **
// ***
// ****
// *****

const startPatern_1 = async (n, i) => { // function with parameters

    console.log("*".repeat(i));
    i += 1;
    if (i <= n) {
        startPatern_1(n, i);
    }
}

//     *
//    ***
//   *****
//  *******
// *********

const startPatern_2 = async (n, i) => { // function with parameters
    // Add your logic here!
    console.log("Hello world!", "startPatern_2");
}


// 1*2 => 2
// 1*2*3 => 6
// 1*2*3*4 => 24
// 1*2*3*4*5 => 120


const factorials = async (currentValue, value) => { // function with parameters

    for (let i = 1; i <= value; i++) {
        currentValue = currentValue * i;
    }

    console.log("Factorial Value", currentValue);

}


// Check Prime Number: Check if a number is prime.
// Jab bhi koi value prime hoti h to wo sirf apne aapse purn vibhajit joti h.
// 5/1, 5/2, 5/3, 5/4, 5/5 =1 it's a prime number
// 6/1, 6/2 = 3, 6/3 = 2, 6/4, 6/5, 6/6 =1 not a prime

const findprime = async (value) => {
    let prime = true;
    if (value == 1) {
        console.log(`its a prime number ${value}`);
    } else {
        for (let i = 2; i <= value; i++) {
            if (i != value) {
                if (value % i == 0) {
                    prime = false;
                }
            }
        }
        if (prime == true) {
            console.log(`its a prime number ${value}`);
        }
        //  else {
        //     console.log(`its not a prime number ${value}`);
        // }
    }
}

const findprimeList = async (range) => {

    for(let i = 1; i <= range; i++) {
        findprime(i)
    }

}


// start value (1) and incrrement value (2) till 100
// 1, 3, 5, 7, 9, 11, 13 ......

// start value (3) and incrrement value (5) till 100
// 3, 8, 13, 18, 23 .......

const apSeries = (firstValue, difference) => {
    for (let i = firstValue; i < 100; i+=difference) {
        console.log(i);
    }
}

// start value (1) and incrrement value by(sum of last and 2nd last value) till 100
// 1, 3, 4, 7, 11, 18, 29, 47,   ......

// start value (1) and incrrement value by(sum of last and 3rd last value) till 100
// 1, 3, 5, 6, 9, 14, 20, 29,   ......



// how we can call function
// startPatern_1_demo();
// startPatern_1(5,0);
// startPatern_2(5,0);
// factorials(1, 6);

// findprime(15);
// findprimeList(50);
apSeries(3,5)