var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesToVisit = ["Saudia Arabia", "Brazil", "Thailand", "Palestine"];
console.log("original order:", countriesToVisit);
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
console.log("Still in original order:", countriesToVisit);
console.log("Reversed Alphabetical order", __spreadArray([], countriesToVisit, true).reverse());
console.log("Still in original order:", countriesToVisit);
console.log("Reversed Order", __spreadArray([], countriesToVisit, true).reverse());
console.log("Still in original order:", countriesToVisit);
console.log("Original Array Reversed", countriesToVisit.reverse());
console.log("Back to Original Order", countriesToVisit.reverse());
console.log("Sorting in Alphabetical", countriesToVisit.sort());
console.log("Original Array Reversed", countriesToVisit.reverse());
