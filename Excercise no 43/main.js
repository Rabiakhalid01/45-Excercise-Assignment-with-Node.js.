//define the function to show magicains names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// define an array of magicians name
var magician_name = ["Harry", "Sam", "John"];
// making a copy of original array through .Slice() function
var copy_magician_names = magician_name.slice();
// modifying the copy of array to include "The great" with their names
var copy_great_magician = make_great(copy_magician_names);
show_magicians(magician_name);
show_magicians(copy_great_magician);
