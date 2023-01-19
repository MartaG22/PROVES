const displayUsers = (users) => {
    
      const userList = document.getElementById("userList");
      userList.innerHTML = "";
      users.forEach(user => {
          const li = document.createElement('li');
          li.classList.add('user-li');
          li.textContent = user.userName;
          li.setAttribute("id", user.userId);
          userList.append(li);
      });
  }
     