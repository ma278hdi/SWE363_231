const fs = require("fs")
const path = require("node:path")

const arg = process.argv

var source = arg[2]

var target = arg[3]

var extinsion = [".txt",".png"]

var containExt = []
fs.readdir(source ,(e,file)=>{
    if(e){
        console.log("File does not exist")
    }

    for(let f of file){
        var ext = path.extname
        if(extinsion.containExt(ext)){
            containExt.push(ext)
        }
    }
    console.log(file)
})