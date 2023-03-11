

//question no.1 Create an array with three elements and print out the second element.
arr = ["aamir","shahrukh","salman"];
console.log(arr[1]);


//question no. 2=Create an array with five elements and print out the length of the array.
arr = ["aamir","shahrukh","salman","akshay","ajay"];
console.log(arr.length);


//question no.3 = Create an array with four elements and print out each element using a for loop
arr = ["aamir","shahrukh","salman","akshay","ajay"];
for (let i = 0;i<arr.length;i++){
console.log(arr[i])
}
console.log(arr.length);


//question No. 4=Create an array with six elements and print out each element using a forEach loop.
arr = ["aamir","shahrukh","salman","akshay","ajay","sunny"];
for(let arr1 in arr){
    console.log(arr[arr1]);
}


//question no.5 = Create an array with three elements and add a fourth element to the end of the array.
arr = ["aamir","shahrukh","salman"] 
console.log(arr);
arr.push("akshay");
console.log(arr);


//question No.6 =Create an array with four elements and remove the second element.
arr = ["aamir","shahrukh","salman","akshay"]
arr.splice(1,1);
console.log(arr);
console.log(arr.push());


//question no. 7 Create an array with five elements and remove the last element.
arr = ["aamir","shahrukh","salman","akshay","ajay"];
console.log(arr.pop());
console.log(arr)
//question no . 8 Create an array with three elements and check if the array includes a specific value.
//--------  


//question No. 9=Create an array with four elements and sort the array in ascending order.
arr = ["aamir","shahrukh","salman","akshay",];
num = [1,22,56,1,12,32,98,6,4]
console.log(num)
num.sort(function(a,b){
    return a-b;
})
console.log("after sort num",num)
console.log(arr.sort());


//question No. 10 =Create an array with five elements and sort the array in descending order.
arr = ["aamir","shahrukh","salman","akshay","ajay"];
arr.sort(function(a,b){
    return b.localeCompare(a);
});
console.log(arr);
num = [1,22,56,1,12,32,98,6,4]
console.log(num)
num.sort(function(a,b){
    return b-a;
})
console.log(num);


//qestion no. 11 Create two arrays, concatenate them and print out the resulting array.
 arr = ["amitabh","rajesh"]
arr1=["jaya","dimple"]
let mix = arr.concat(arr1);
console.log(mix);


//question no 12 = Create an array with three elements and convert it to a string.
num = [1,22,56,1,12,32,98,6,4];
let str= num.toString();
console.log(num);
console.log(str);


//question no 13= Create an array with five elements and reverse the order of the elements.
arr = ["aamir","shahrukh","salman","akshay","ajay"];
console.log(arr);
arr.reverse();
console.log(arr);


//question no. 14= Create an array with five elements and find the index of a specific value
arr = ["aamir","shahrukh","salman","akshay","ajay"];
let val = arr.indexOf('salman');
console.log(arr);
console.log("salman value is in array",val)


//question no. 15  Create an array with six elements and slice the array to create a new array with the first three elements.
arr = ["aamir","shahrukh","salman","akshay","ajay"];
arr1 = arr.slice(0,3);
console.log(arr1);


//question no. 16 Create an array with six elements and use the map method to double each element.
num = [1,22,56,1,12,32,98,6,4];
let num1 = num.map(test);
function test(num2){
    return num2 * 2;
}
console.log(num1)


//question no. 17=Create an array with four elements and use the while loop to calculate the sum of all elements.
num = [1,22,56,1,12,32,98,6,4];
let i = 0;
let add =0;
while(i<num.length){
    add = add+num[i];
    i++;
}
console.log(add);


//question no. 18 =  Create an array with five elements and use the filter method to return only the even numbers.


//question no 19 = Create an array with five elements and use the join method to concatenate the elements with a dash (-) separator.

arr = ["aamir","shahrukh","salman","akshay","ajay"];
arr1 = arr.join("-");
console.log(arr1);

//question no. 20
arr = ["aamir","shahrukh","salman","akshay","ajay"];
num = [1,22,56,1,12,32,98,6,4];
arr1 = arr.concat(num);
console.log(arr1);