const sendMessage = async () => {
      // console.log("DADES REBUDES EN MESSAGES.JS/SENDMESSAGE", room, arrayUsers, currentUser)
      // const text = document.querySelector('.chat-form input[name="newMessage"]').value;
      try {
            
            const newMessageUser = document.querySelector('.xatForm input[name="newMessage"]').value;
            document.querySelector('.xatForm input[name="newMessage"]').value = ""
            console.log('newMessage', newMessageUser);
            
            // const currentUser = {userId: sessionStorage.userId, userName: sessionStorage.userName};
            const room = {roomId: sessionStorage.roomId, roomName: sessionStorage.roomName};
            
            console.log(room);
            

            if (newMessageUser) {
                  socket.emit("newMessage", newMessageUser);
                  
            }

      } catch (error) {
            return { status: "error", message: error };
      }
      
}