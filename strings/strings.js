//let text = "JavaScripts PHP HTML CSS";
//console.log(text)
//let ftext = text.slice(3,20);
//console.log (ftext);
//ftext = text.charAt(22);
//console.log(ftext);
//console.log (ftext.substring(-3,20));
//console.log (ftext.substring(12,6));
//console.log(text.substr(4,6)); 
//console.log(text.repeat(2));
//console.log(text.indexOf('PHP'));
//text.valueOf()
/*let arr = [1, 2, 3, 4, 5, 9, 8, 7, 10, 3, 4];
console.log(arr.slice(1, 5));
console.log(arr.slice(3));
console.log(arr.slice(1, -3));
console.log(arr.slice(-5, -2));
console.log(arr.slice(-2, -5));
console.log(arr.slice(0, -5));*/

/*let arr = [1, 2, 3, 4, 5, 9, 8, 7, 10, 3, 4];
arr.splice(3, 3); //[1, 2, 3, 8, 7, 10, 3, 4]
arr.splice(1, 0, 111, 121, 131, 11, 21); //[1, 110, 120, 130, 2, 3, 8, 7, 10, 3, 4]
console.log(arr);
arr.splice(1, 4, 110, 120, 130); //[1, 110, 120, 130, 21, 2, 3, 8, 7, 10, 3, 4]
console.log(arr);*/
/*let arr1 = [2,4,3,5,6,0];
let arr2 = [7,4,3,5,8,9,0];
 let arr3 = [];
 for(let i=0; i<arr1.length; i++){
     for(let j=0; j<arr2.length; j++){
         if(arr1[i] - arr2[j] === 0){
             arr3.push(arr1[i])
         }
         
     }
 }
 console.log(arr3);*/
 /*let arr = [1, 113, 111, 2, 11, 22, 3, 21, 33, 1111111];
function test(val1, val2) {
  return val2 - val1; //Descening order
}
function test2(val1, val2) {
  return val1 - val2; //Ascending order
}
console.log(arr.sort(test));
console.log(arr.sort(test2));*/
/*let data =[130,3,3,76,789]
for (i=0;i<data.length;i++){
    for (j=0;j<data.length;j++){
        console.log(data);
        if (data[j]>data[j+1]){
            let temp = data[j];
            data[j]=data[j+1];
            data[j+1]=temp;

        }
        console.log(data);
    }
}*/
/*let arr = ["aarif", "firoj", "jamil","aarif", "bilal", "aabid", "harshit", "rafik"];
console.log(arr.sort());*/
//let arr = [1, 2, [5, [10, [11, 22], 20], 7], 3, 4, 5, [8, 9, 10]];
//console.log(arr, arr.flat(3));
let b = [1, 2];
function odd(num1) {
  return num1 % 2 === 1;
}
let ans = b.every(odd);
console.log(ans);