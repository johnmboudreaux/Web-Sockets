const socket = io();

function typingtimeoutFunction (){

  socket.emit('typingMessage', 'stopped typing');
},

// var typing = false;
// var timeout = undefined;
//
// function timeoutFunction(){
//   typing = false;
//   socket.emit(noLongerTypingMessage);
// }
//
// function onKeyDownNotEnter(){
//   if(typing == false) {
//     typing = true
//     socket.emit(typingMessage);
//     timeout = setTimeout(timeoutFunction, 5000);
//   } else {
//     clearTimeout(timeout);
//     timeout = setTimeout(timeoutFunction, 5000);
//   }
//
// }
