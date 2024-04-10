// define a function witg a rest parameter that accept items arguments  representing our sandwich
function makeSandwich(...items: string[]){

console.log("\n Making a sandwich with following items:\n" );

items.forEach(singleItem => console.log(singleItem));

console.log("\n Now Enjoy Sandwich");
}

// Call the function three times with three different number of argumnets

makeSandwich("bread","chicken","cheese","cabbage","mayonaise","egg","ketchup");

makeSandwich("bread","chicken","butter");

makeSandwich("bread","chicken","mayonaise","egg","cabbage","egg","cheese","ketchup","pickle","olives");

