var userNames = ["Admin", "Eric", "John", "Sam", "Lucy"];
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello, ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello, ".concat(oneUser, ", Thankyou for logging in again."));
    }
});
