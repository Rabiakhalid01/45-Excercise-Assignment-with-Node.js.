var guestlist = ["Rabia", "Ayesha", "Khadija", "Khalid"];
var dontCome = guestlist[0];
console.log(dontCome, "unable to come");
guestlist.splice(0, 1, "Saba");
guestlist.forEach(function (guest) { return console.log("Assalam o alikum ".concat(guest, ", Would you like to enjoy dinner with me?")); });
