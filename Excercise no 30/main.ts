let userNames= ["Admin","Eric","John","Sam","Lucy"];
userNames.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello, ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello, ${oneUser}, Thankyou for logging in again.`)
    }
})