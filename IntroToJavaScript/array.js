let arr=[1,2,3,4,"anmol", "latiyan"];
console.log(arr.length);
// push shift
arr.push("aa"); // to push at last 
console.log(arr);
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift("first"); // to add at last 
console.log(arr);
arr.shift(); // to remove first 

console.log(arr);
arr.pop();// to remove at last
console.log(arr);

// slice and splice 
let copied=arr.slice(1,3); // if arr.slice(2); toh 2 se end takk k sare
console.log(copied);
let q=arr.splice(0,3);   // actual array se 0,1,2 remove kardega  rest ka array m rahga 
console.log(q);
console.log(arr);
