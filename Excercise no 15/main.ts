let guestlist = ["Rabia", "Ayesha", "Khadija", "Khalid"];
let dontCome = guestlist [0];
console.log(dontCome, "unable to come");
guestlist.splice(0, 1, "Saba");
guestlist.forEach (guest => console.log(`Assalam o alikum ${ guest}, Would you like to enjoy dinner with me?`));