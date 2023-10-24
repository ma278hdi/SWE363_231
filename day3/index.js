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
    cordnateX = e.clientX - canvas.getBoundingClientRect.left
    cordnateY = e.clientY - canvas.getBoundingClientRect.top 
    
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
var coffee3 = new Coffee("Black Hourse","Colombia")
coffeeObject.push(coffee1.name)
coffeeObject.push(coffee2.name)
coffeeObject.push(coffee3.name)

/// using map fucntion to indicate that each coffee has 250 g
var newCoffeeObject = coffeeObject.map(function(el){
    return el + "weight is 250 g"
})
console.log(newCoffeeObject)
// filter array
var locationCoffee = []
locationCoffee.push(coffee1.type)
locationCoffee.push(coffee2.type)
locationCoffee.push(coffee3.type)
var newLocatedArray = locationCoffee.filter(function(el){
    return el === "Colombia"
})
console.log(newLocatedArray)
// 