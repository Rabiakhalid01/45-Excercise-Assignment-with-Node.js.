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
console.log("Unfortunately our dinner table is not available, so only 2 guests can join me at dinner");
while (guestlist.length > 2) {
    var removeGuest = guestlist.pop();
    console.log("Sorry, ".concat(removeGuest, " I cannot invite you dinner"));
}
console.log("Invitation to the last two guests");
guestlist.forEach(function (lasttwo) { return console.log("Luckily ".concat(lasttwo, " you are still invited for dinner")); });
guestlist.pop();
guestlist.pop();
console.log("emptyList:", guestlist);
