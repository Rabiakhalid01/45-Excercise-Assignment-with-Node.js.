// defining a functiom to create a car object with optional options...
function create_car(manufacturer, model, ...options){
    // initialize a car object with manufacturer and model
    let car ={
        manufacturer:manufacturer,
        model: model
    };
    // add additional option to tha car object
    options.forEach(option=>{
        let [key,value] = option.split(":");
        car [key.trim()] = value.trim();
    })
    return car;
}
//call the function to create a car object
let my_car=create_car("Honda","Civic","color: White","Sunroof:True", "Year:2024");

// print the varaible to ensure all the information stored accurately
console.log(my_car);