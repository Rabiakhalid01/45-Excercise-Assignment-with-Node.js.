// define a function witg a rest parameter that accept items arguments  representing our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a sandwich with following items:\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now Enjoy Sandwich");
}
// Call the function three times with three different number of argumnets
makeSandwich("bread", "chicken", "cheese", "cabbage", "mayonaise", "egg", "ketchup");
makeSandwich("bread", "chicken", "butter");
makeSandwich("bread", "chicken", "mayonaise", "egg", "cabbage", "egg", "cheese", "ketchup", "pickle", "olives");
