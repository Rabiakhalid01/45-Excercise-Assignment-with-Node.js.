// making a function
function make_shirt (size: string= "Large", printMessage: string="I love typescript"){
    console.log( `creating a ${size} shirt with "${printMessage}" print on shirt.`)
}
// calling a function with default message
make_shirt();
// calling a function with Medium size and default message
make_shirt("Medium");
// calling a function with Small size and different print message
make_shirt("Small"," I love Javascript");