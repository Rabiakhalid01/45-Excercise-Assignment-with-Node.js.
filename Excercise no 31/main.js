var userNames = ["Admin", "John", "Sam", "Lucy", "Adam"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array is Empty We need to find some users");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello, ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello, ".concat(oneUser, ", Thankyou for logging in again."));
        }
    });
}
