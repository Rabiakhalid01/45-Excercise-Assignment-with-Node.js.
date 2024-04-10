//define the function to show magicains names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// define an array of magicains name
var magician_name = ["Harry", "Sam", "John"];
var great_magicians = make_great(magician_name);
show_magicians(great_magicians);
