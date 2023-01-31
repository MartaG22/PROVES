const getMessages = async () => {

      // const text = document.querySelector('.chat-form input[name="newMessage"]').value;
      try {
            
            const newMessageUser = document.querySelector('.xatForm input[name="newMessage"]').value;
            // const newMessageUser = document.getElementById("newMessage");
            console.log('newMessage', newMessageUser);
      } catch (error) {
            return { status: "error", message: error };
      }
      
}