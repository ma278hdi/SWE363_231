var canvas = document.querySelector('canvas')
var width = 200
var hight = 200
var c = canvas.getContext('2d')


c.fillStyle = 'blue'
c.fillRect(0,0,width,hight)

var cordnateX;
var cordnateY;
var pressed = false
const mousemoveEvent = function(e){
    cordnateX = e.clientX
    cordnateY = e.clientY

}
document.addEventListener('mousemove',mousemoveEvent)


canvas.addEventListener('mousedown',(async ()=>{
    pressed = true
})())
canvas.addEventListener('mouseup',(function(){
    pressed = false
})())


function drawLine(){
    c.fillStyle = 'green'

     if(pressed){
        c.beginPath()
        c.arc(cordnateX,cordnateY, 5 , 0 , 2*Math.PI ,false)
        c.fill()
     }
     requestAnimationFrame(drawLine);
     c.closePath()
     c.stroke()

}
drawLine() 

class Coffee{
    constructor(name,type){
        this.name = name,
        this.type = type
    }
}
var coffeeObject = []
var coffee1 = new Coffee("L.TONE","Bujuku")
var coffee2 = new Coffee("roasting house","Colombia")
console.log(typeof(coffee1))
coffeeObject[0] = coffee1
coffeeObject[1] = coffee2
console.log(coffeeObject[1].name)
