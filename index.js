var express = require('express')
var ejs = require('ejs')

var app = express()
app.use(express.static('public'))
app.listen(3000)
app.set('view engine','ejs')
app.get("/",(req,res)=>{
res.render('pages/index')
})