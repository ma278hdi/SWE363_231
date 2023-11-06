var sendBtn = document.getElementById('sendBtn')
var textbox = document.getElementById('textbox')

sendBtn.addEventListener('click',(e)=>{
   var text =  textbox.value
   alert(text)
})