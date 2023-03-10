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
//  
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
//Create an array with five elements and reverse the order of the elements.
arr = ["aamir","shahrukh","salman","akshay","ajay"];
console.log(arr);
arr.reverse();
console.log(arr);
//Create an array with five elements and find the index of a specific value
arr = ["aamir","shahrukh","salman","akshay","ajay"];
let val = arr.indexOf('salman');
console.log(arr)
console.log("salman value is in array",val)