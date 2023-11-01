// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.


// describe ("fiboSeq", () => {
//   it ("takes in number < 2 and and returns an array containing the Fibonacci sequence with length determined by number", () => {
    
//     const fibonacciLength1 = 6
//     expect [1, 1, 2, 3, 5, 8]
//     // const numb1 = 6
//     // expect [1, 1, 2, 3, 5, 8]
//     const fibonacciLength2 = 10
//     expect[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//     // const numb2 = 10
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//   })
// })

//Output: PASS - (thought the Red phase were supposed to produce one fail)


// // b) Create the function that makes the test pass.

// // Pseudo code:

// // input: number > 2
// // output: an array w/Fibonacci sequence at length of number entered as arguement =>
// // create conditional statement (for let); starting number pair = [1,1]
// // set i=2, then have i<2 (numbers greater than 2)
// //REMEBER..INDENT!

// const fiboSeq = (number) => {
//   let array = [1,1];
//       for(let i = 2; i < number; i++) {
//         array[i] = array[i-1] + array[i-2];
//       }
//           return array;
// }

//     const fibonacciLength1 = 6
//     const fibonacciLength2 = 10
   

// console.log(fiboSeq(fibonacciLength1))
// console.log(fiboSeq(fibonacciLength2))

//OUTPUT: PASS; fibonacciLength1 [ 1, 1, 2, 3, 5, 8 ] , fibonacciLength2[1,  1,  2,  3,  5, 8, 13, 21, 34, 55]



// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe ("leastToGreat", () => {
  it ("takes in an object and returns an array of the object's values sorted from least to greatest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
  })


    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65

    }
})

        expect [15, 15, 20, 30, 30, 60, 90]
        expect [10, 15, 20, 45, 60, 65, 100]

//OUTPUT: PASS


// b) Create the function that makes the test pass.

// Pseudo code:


//INPUT: an object
//OUTPUT: array of the object's values sorted from least to greatest
//use object.values to grab input values and place them in array
//use .sort to sort values from least to greatest

// function rankObjValues(object) {
//   const objToArray = {object}
//     console.log(Object.value(object));
  
  // const valueArray = object.values(object);
  //   valueArray.sort((a,b) => a-b);
  //     return valueArray;

// }

// const studyMinutesWeek1 = {
//   sunday: 90,
//   monday: 30,
//   tuesday: 20,
//   wednesday: 15,
//   thursday: 30,
//   friday: 15,
//   saturday: 60
// }


// const studyMinutesWeek2 = {
//   sunday: 100,
//   monday: 10,
//   tuesday: 45,
//   wednesday: 60,
//   thursday: 20,
//   friday: 15,
//   saturday: 65
// }

// const valueArray = (array) => {

//   valueArray.sort((a,b) => a-b);
//     return valueArray;
  
// }
//     const sortedArray = rankObjValues(studyMinutesWeek1)
//     const sortedArray2 = rankObjValues(studyMinutesWeek2)

// console.log(sortedArray)
// console.log(sortedArray2)

function sortObjectValues(obj) {
  const valuesArray = Object.values(obj);
    valuesArray.sort((a, b) => a - b);
      return valuesArray;
}

function combineAndSortObjects(objectArray) {
  const combinedValues = objectArray.flatMap(obj => Object.values(obj));
    combinedValues.sort((a, b) => a - b);
      return combinedValues;
}

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
};

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
};

const combinedObjects = [studyMinutesWeek1, studyMinutesWeek2];

const sortedValues = combineAndSortObjects(combinedObjects);
console.log(sortedValues);

//OUTPUT: [10, 15, 15, 15, 20, 20, 30,  30, 45, 60, 60, 65, 90, 100]