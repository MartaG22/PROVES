
document.querySelector(".entry-form").addEventListener('submit', e => {
      e.preventDefault();
  
      sessionStorage.clear();
      
      const userName = document.querySelector('.entry-form [name="username"]').value;
      const password = document.querySelector('.entry-form [name="password"]').value;
      const rePassword = document.querySelector('.entry-form [name="repassword"]').value;
      const registerError = document.querySelector("#showError");
      const apiUrl = 'http://localhost:3000';
      
    //   document.getElementById(login-error).innerHTML = "";
    //   registerError.innerHTML = "";
      console.log("userName:", userName, "password:", password);

      const regex = /\s/;
      if(regex.test(userName)){
          registerError.innerHTML = 'El nombre de usuario no es válido';
          return;
      }
  
      if (password !== rePassword) {
          registerError.innerHTML = 'Los passwords no coinciden';
          return;
      }
     
      fetch(apiUrl + '/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({userName, password})
      })
      .then(res => res.json())
      .then(data => {
          if (data.status === 'ok') {
            //   window.location.replace('./index.html')  //! ???
              window.location.replace('./login.html')
            //   window.location.assign("../HTML/xat.html");
                    // window.location.assign("../xat.html");
          } else {
              registerError.innerHTML = data.message;
          }
      }).catch(err => registerError.innerHTML = err.message);
  
  })

  function deleteError() {
          showError.innerHTML = "";

  }
  