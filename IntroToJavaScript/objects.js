let obj={
    name:"anmol",
    lastName:"latiyan",
    Adress:" GhaziaBad",
    carry:"Don",
    Country:"India",
    age:23,
    movies:"Captain",
    Rank:"Lt Anmol Latiyan",
    Salary:100000,
    SaysHi: function(){
        console.log("saysHi");
    },                                 // if key contains a function then it is called method
                                       // if key contain any other thing it is called properties
    love: function(){
        console.log("love all");
    }
};
console.log(obj.Salary);
obj.Salary=1500000;
console.log(obj.Salary);
console.log(obj);
for(let i in obj){
    console.log(i);
    console.log(obj[i]);

}


