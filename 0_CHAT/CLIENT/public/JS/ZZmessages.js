const sendMessage = () => {
      /*    const dt = new Date();
      let time =  dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds(); */
    
      const text = document.querySelector(
        '.chat-form input[name="newMessage"]'
      ).value;
    
      const user = {
        userId: sessionStorage.userId,
        userName: sessionStorage.userName,
      };
      const room = {
        roomId: sessionStorage.roomId,
        roomName: sessionStorage.roomName,
      };
    
      if (text) {
        let message = { user, room, text };
    
        socket.emit("new-message", message);
        displayMessage(message);
        document.querySelector('.chat-form input[name="newMessage"]').value = "";
      }
    
      return false;
    };
    
    const displayMessage = (message) => {
      let messageList = document.getElementById("messageList");
      let li = document.createElement("li");
      li.classList.add("chat-li");
      li.textContent = message.text;
      let ul = document.getElementById("lastMessage");
    
      if (ul && ul.getAttribute("userId") === message.user.userId) {
        ul.append(li);
      } else {
        if (ul) document.getElementById("lastMessage").removeAttribute("id");
    
        ul = document.createElement("ul");
        ul.setAttribute("id", "lastMessage");
        ul.setAttribute("userId", message.user.userId);
    
        if (message.user.userId === sessionStorage.userId) {
          ul.classList.add("myMessage");
        } else {
          const name = document.createElement("li");
          name.textContent = `${message.user.userName} says:`;
          messageList.append(name);
          ul.classList.add("notMyMessage");
        }
        ul.append(li);
        messageList.append(ul);
      }
      messageList.scrollTop = messageList.scrollHeight;
    };
    
    const displayJoinMessage = (message) => {
      document.getElementById("lastMessage").removeAttribute("id");
    
      let messageList = document.getElementById("messageList");
      let li = document.createElement("li");
      li.classList.add("chat-li-join");
      li.textContent = message;
      li.setAttribute("id", "lastMessage");
      messageList.append(li);
    
      messageList.scrollTop = messageList.scrollHeight;
    };