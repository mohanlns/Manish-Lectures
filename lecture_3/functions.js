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

const startPatern_1 = async (n,i) => { // function with parameters
    
    console.log("*".repeat(i));
    i += 1;
    if (i <= n) {
        startPatern_1(n,i);
    }
}

//     *
//    ***
//   *****
//  *******
// *********

const startPatern_2 = async (n,i) => { // function with parameters
    // Add your logic here!
    console.log("Hello world!", "startPatern_2");
}


// 1*2 => 2
// 1*2*3 => 6
// 1*2*3*4 => 24
// 1*2*3*4*5 => 120


const factorials = async (currentValue,value) => { // function with parameters

    for (let i = 1; i <= value; i++) {
        currentValue = currentValue*i;
    }

    console.log("Factorial Value", currentValue);

}


// Check Prime Number: Check if a number is prime.
// Jab bhi koi value prime hoti h to wo sirf apne aapse purn vibhajit joti h.

const findPrime = async (value) => {
    // Apply you logic here.
}



// how we can call function
// startPatern_1_demo();
// startPatern_1(5,0);
// startPatern_2(5,0);
factorials(1,6);

findPrime(2);
