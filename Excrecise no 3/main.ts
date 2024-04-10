let persoName ="rabia khalid";
console.log(persoName.toLowerCase());

console.log(persoName.toUpperCase());

console.log(persoName.replace(/\b\w/g, (char => char.toUpperCase())));
