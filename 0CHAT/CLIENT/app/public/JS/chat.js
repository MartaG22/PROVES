//! https://www.youtube.com/watch?v=0wqteZNqruc


console.log('chat XXXXXXXXXXcodigo');

const socket = io();


// DOM elements
let message = document.getElementById('message');
console.log(message)
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');


btn.addEventListener('click', function() { 
      socket.emit('chatMessage', {
            message: message.value,
            username: username.value
      })
      console.log(username.value, message.value);
});

message.addEventListener('keypress', function () {
      socket.emit('chatTyping', username.value)
})

socket.on('chatMessage', function(data) {
      output.innerHTML += `<p> <strong>${data.username}</strong>: ${data.message}</p>`
});

