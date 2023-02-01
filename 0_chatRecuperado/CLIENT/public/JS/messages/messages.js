const sendMessage = async () => {
      // console.log("DADES REBUDES EN MESSAGES.JS/SENDMESSAGE", room, arrayUsers, currentUser)
      // const text = document.querySelector('.chat-form input[name="newMessage"]').value;
      try {
            
            const newMessageUser = document.querySelector('.xatForm input[name="newMessage"]').value;
            document.querySelector('.xatForm input[name="newMessage"]').value = ""
            console.log('newMessage', newMessageUser);
            
            // constr currentUser = {userId: sessionStorage.userId, userName: sessionStorage.userName};
            const room = {roomName: sessionStorage.roomName};
            
            console.log('room', room);
            

            if (newMessageUser) {
                  socket.emit("newMessage", newMessageUser, room);
                  
            }

      } catch (error) {
            return { status: "error", message: error };
      }
      
}