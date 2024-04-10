// Creating a guest list array
var guestlist = ["Rabia", "Ayesha", "Khadija", "Khalid"];
var dontCome = guestlist[0];
console.log(dontCome, "unable to come");
guestlist.splice(0, 1, "Saba");
console.log("Good news we have found a bigger table for dinner");
guestlist.unshift("Rohina");
guestlist.push("Fatima");
var middleIndex = Math.floor(guestlist.length / 2);
guestlist.splice(middleIndex, 0, "Jannat");
console.log("updated list of our Guests");
guestlist.forEach(function (oneguest) { return console.log("Assalam o alaikun ".concat(oneguest, ", would you like to have a dinner with me?")); });
