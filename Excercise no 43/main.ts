//define the function to show magicains names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name))
}
function make_great( magicians: string[]){
    return magicians.map(name => `The Great ${name}`)
}
// define an array of magicians name
let magician_name=["Harry","Sam","John"];

// making a copy of original array through .Slice() function

let copy_magician_names = magician_name.slice() 

// modifying the copy of array to include "The great" with their names

let  copy_great_magician= make_great(copy_magician_names);

show_magicians(magician_name);

show_magicians(copy_great_magician);