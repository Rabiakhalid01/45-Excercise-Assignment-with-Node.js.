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
console.log("Unfortunately our dinner table is not available, so only 2 guests can join me at dinner");
while(guestlist.length>2){
    let removeGuest = guestlist.pop();
    console.log(`Sorry, ${removeGuest} I cannot invite you dinner`)
}
console.log("Invitation to the last two guests");
guestlist.forEach(lasttwo=> console.log( `Luckily ${lasttwo} you are still invited for dinner`));
guestlist.pop();
guestlist.pop();
console.log("emptyList:", guestlist);