// making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love typescript"; }
    console.log("creating a ".concat(size, " shirt with \"").concat(printMessage, "\" print on shirt."));
}
// calling a function with default message
make_shirt();
// calling a function with Medium size and default message
make_shirt("Medium");
// calling a function with Small size and different print message
make_shirt("Small", " I love Javascript");
