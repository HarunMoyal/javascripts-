[1]// Create an array called fruits
//let fruits = ["apple", "banana", "orange"];

// Check if "orange" is in the fruits array
//if (fruits.includes("orange")) {
  //console.log("Orange is in the fruits list.");
//} else {
 // console.log("Orange is not in the fruits list.");
//}
//[2]
function sumOfEven(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) { // If the number is even
        sum += numbers[i]; // Add it to the sum
      }
    }
    return sum;
  }
  
  let numbers = [1, 2, 3, 4, 5, 6];
let sum1 = sumOfEven(numbers);
console.log(sum1); 

//[3]
function uniqueElements(arr1, arr2) {
    let unique = [...new Set([...arr1, ...arr2])];
    return unique;
  }
  let arr1 = [1, 2, 3];
  let arr2 = [2, 3, 4, 5];
  let unique = uniqueElements(arr1, arr2);
  console.log(unique); 
  //[4]
  function longestString(arr) {
    let longest = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longest.length) {
        longest = arr[i];
      }
    }
    return longest;
  }
  let arr = ["salman", "sharukh khan", "aamir", "akshay", "sunny"];
let longest = longestString(arr);
console.log(longest); 
//[5]
function largestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }
  let arrr = [8, 7, 1, 8, 2, 9, 4,203,1001];
let largest = largestNumber(arrr);
console.log(largest); 
//[6]
  function filterEvenNumbers(mynum) {
    let evenarray = [];
    for (let i = 0; i < mynum.length; i++) {
      if (mynum[i] % 2 === 0) {
        evenarray.push(mynum[i]);
      }
    }
    return evenarray;
  }
  let mynum1 = [11,32,389,14,25,6,100,28,25];
  
console.log(filterEvenNumbers(mynum1));
//[7]Write a function that takes an array of strings and returns a new array that only contains strings with more than 5 characters.
  
let my_array = ["hindi", "english", "sanskrit", "urdu", "maths"];

function Long_Strings(strArray) {
    let long_array = [];
    for (let i = 0; i < strArray.length; i++) {
      if (strArray[i].length > 5) {
        long_array.push(strArray[i]);
      }
    }
    return long_array;
  }
  console.log("long Strings >5 =",Long_Strings(my_array));

  //[8]Write a function that takes two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays).\
  function search_num(array1, array2) {
    let result= [];
    for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
        result.push(array1[i]);
      }
    }
    return result;
  }
  let array1 = [10, 20, 25, 65, 90, 30, 45];
let array2 = [11,25,90,44, 3, 40, 65];
let result = search_num(array1, array2);
console.log("Array1 =",array1);
console.log("Array2 =",array2);

console.log("Same number in Array1 and Array2 =",result); 

//[9]Write a function that takes an array of numbers and returns a new array where each element is the square of the original element
function square(num) {
    let result = [];
    for (let i = 0; i <= arr.length; i++) {
      result.push(num[i] * num[i]);
    }
    return result;
  }
  let my_Array = [2,4,6,8,10,12,];
let squaredArray = square(my_Array);
console.log(my_Array);
console.log("squareof array num=",squaredArray);
//[10]  Write a function that takes an array of numbers and returns the average of all the numbers in the array

function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    let average1 = sum / arr.length;
    return average1;
  }
  let myArray = [10, 20, 30, 40, 50,60];
let average1 = average(myArray);
console.log("my_array number=",myArray)
console.log("AVERAGE OF MY NUMBERS=",average1);

//[11]  Write a function that takes an array of numbers and returns a new array that only contains numbers that are greater than 5. Use filter function

