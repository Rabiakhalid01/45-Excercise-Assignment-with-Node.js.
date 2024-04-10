var current_Users = ["Rabia", "Ayesha", "Khadija", "Hina", "Saba"];
var new_Users = ["Khalid", "Ayesha", "Ali", "Rabia", "Saba"];
new_Users.forEach(function (one_new_user) {
    var our_condition = current_Users.some(function (current_one_user) { return current_one_user.toLowerCase() === one_new_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry, ".concat(one_new_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(one_new_user, " is available"));
    }
});
