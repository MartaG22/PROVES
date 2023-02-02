const sendMessage = async () => {

      // const text = document.querySelector('.chat-form input[name="newMessage"]').value;
      try {
            
            const newMessageUser = document.querySelector('.xatForm input[name="newMessage"]').value;
            console.log('newMessage', newMessageUser);

            return {newMessageUser}
            // if (newMessageUser) {
            //       socket.emit("newMessage", newMessage);
                  
            // }


      } catch (error) {
            return { status: "error", message: error };
      }
      
}