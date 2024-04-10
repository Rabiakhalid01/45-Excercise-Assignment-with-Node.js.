let current_Users=["Rabia","Ayesha","Khadija","Hina","Saba"];
let new_Users= ["Khalid","Ayesha","Ali","Rabia","Saba"];
new_Users.forEach(one_new_user =>{
    let our_condition =current_Users.some(current_one_user=>current_one_user.toLowerCase()===one_new_user.toLowerCase())
    if(our_condition){
        console.log(`Sorry, ${one_new_user} is already taken!`)
    }else{
        console.log(`This Username ${one_new_user} is available`)
    }
})