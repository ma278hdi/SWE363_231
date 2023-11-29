const EventEmiter = require("events")


const emiter = new EventEmiter()

emiter.on("Log In",()=>{
    console.log("Ali logged out")
})

emiter.emit("Log In","Ali")