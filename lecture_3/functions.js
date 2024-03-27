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

// how we can call function
// startPatern_1_demo();
// startPatern_1(5,0);
startPatern_2(5,0)