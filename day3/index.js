var canvas = document.querySelector('canvas')
var width = 200
var hight = 200
var c = canvas.getContext('2d')


c.fillStyle = 'blue'
c.fillRect(0,0,width,hight)

var cordnateX;
var cordnateY;
var pressed = false

document.addEventListener('mousemove',e=>{
    cordnateX = e.clientX
    cordnateY = e.clientY

})

canvas.addEventListener('mousedown',()=> pressed = true)
canvas.addEventListener('mouseup',()=> pressed= false)


function drawLine(){
    c.fillStyle = 'green'

     if(pressed){
        c.beginPath()
        c.arc(cordnateX,cordnateY, 30 , 0 , 2*Math.PI ,false)
        c.fill()
     }
     requestAnimationFrame(drawLine);

}
drawLine()