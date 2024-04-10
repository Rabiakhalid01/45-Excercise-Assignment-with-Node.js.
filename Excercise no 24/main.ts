let rose = "Rose";
let uppercaseRose = "ROSE";
let five = 5
let ten = 10
let flowers= ["Rose", " Tulip","Lily"]
// test for equality and inequality with string
 console.log("Is Rose is equal to Rose");
 console.log(rose =="Rose");

 console.log("\nIs Rose is not equal to Rose");
 console.log( rose != "Rose");

 // TEST USING LOWERCASE FUNCTION
 console.log( "\nIs ROSE is equal to apple after converting to lowercase");
 console.log(uppercaseRose.toLowerCase()== "rose");

 console.log( "\nIs ROSE is not equal to apple after converting to lowercase");
 console.log(uppercaseRose.toLowerCase()!= "rose");
 
//Numerical tests
//equal to
console.log("\n Is five is equal to ten");
console.log(five ==  ten);

//not equals to
console.log("\n Is five is not equal to ten");
console.log(five !=  ten);

//greater than
console.log("\n Is ten is greater than five");
console.log(ten > five);

//less than
console.log("\n Is ten is less than five");
console.log(ten < five);

//greater than equal to
console.log("\n Is ten is greater than equal to five");
console.log(ten >= five);

//less than equal to
console.log("\n Is ten is less than equal to five");
console.log(ten <= five);

//test using "and" or "or" operators
//using and operator(&&)
console.log( "\nten is not equal to five and ten is greater than five");
console.log(ten!= five && ten > five);  

console.log( "\nten is not equal to five and ten is less than five");
console.log(ten!= five && ten < five );

// or operators (||)
 console.log("\n five is greater than ten or ten is equal to ten")
 console.log(five > ten || 10 == 10);

 console.log("\n five is greater than ten or ten is not equal to ten")
 console.log(five > ten || 10 != 10);

 // tests whether an item is included in array
 console.log("\n Is lily included in my flowres array");
 console.log( flowers.includes("Llily"));

 // tests whether an item is not included in array
 console.log("\n Is sunflower in not includedin my flowres array");
 console.log( flowers.includes("sunflower"));








