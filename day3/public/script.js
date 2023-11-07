var sendBtn = document.getElementById('sendBtn')
var textbox = document.getElementById('textbox')
var chatContainer = document.getElementById("chatContainer")
var user = {message:""}

function sendMessage(userMessages){
  var messageElement =  document.createElement('div')
  messageElement.style.textAlign = "right"
  messageElement.style.margin = "10px"
  messageElement.innerHTML = "<span>You: </span>" + "<span>" + userMessages + "</span>" 
  chatContainer.appendChild(messageElement)
}


function chatBotResponse(userMessages){
   var messageElementBot = document.createElement('div')
   var outMessage = "Thank you for using our chatbot see you next time"
   messageElementBot.style.margin = "10px" 
      if(userMessages ==="Q"){
      messageElementBot.innerHTML = "<span>bot: </span>" + "<span>" + outMessage + "</span>" 
      chatContainer.appendChild(messageElementBot)
      }else{
         messageElementBot.innerHTML = "<span>bot: </span>" + "<span>" + userMessages + "</span>" 
         chatContainer.appendChild(messageElementBot)
      }
}


sendBtn.addEventListener('click',(e)=>{
   var userMessages =  textbox.value
   if(userMessages ===""){
      alert("Message is empty ")
   }else{
      var userMessagesFinal = userMessages.trim()
      user.message = userMessagesFinal
      textbox.value = ""
      sendMessage(userMessagesFinal)
      chatBotResponse(userMessagesFinal)
   }
})