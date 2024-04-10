//define the function to show magicains names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name))
}
function make_great( magicians: string[]){
    return magicians.map(name => `The Great ${name}`)
}
// define an array of magicains name
let magician_name=["Harry","Sam","John"];

let great_magicians= make_great(magician_name);
show_magicians(great_magicians)

 