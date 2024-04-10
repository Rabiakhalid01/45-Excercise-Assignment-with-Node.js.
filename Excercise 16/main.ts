// Creating a guest list array
let guestlist = ["Rabia", "Ayesha", "Khadija", "Khalid"];
let dontCome = guestlist [0];
console.log(dontCome, "unable to come");
guestlist.splice(0, 1, "Saba");
console.log("Good news we have found a bigger table for dinner");
guestlist.unshift("Rohina");
guestlist.push("Fatima");
let middleIndex: number = Math.floor(guestlist.length / 2);
guestlist.splice(middleIndex,0, "Jannat");
console.log("updated list of our Guests");
guestlist.forEach(oneguest => console.log(`Assalam o alaikun ${oneguest}, would you like to have a dinner with me?`));