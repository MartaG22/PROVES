document.querySelector(".entry-form").addEventListener("submit", (e) => {
      e.preventDefault();
    
      sessionStorage.clear();

      const userName = document.querySelector('entry-form [name="usuari"]').value;
      const password = document.querySelector('entry-form [name="contrasenya"]').value;
      const apiUrl = "http://localhost:3000";
      console.log(userName,contrasenya)
      fetch(apiUrl + "/users/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, password }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "ok") {
            console.log(sessionStorage.userId, data.user.userId);
            if (
              sessionStorage.userId == data.user.userId &&
              sessionStorage.userName == data.user.userName
            ) {
              document.getElementById("login-error").innerHTML =
                "Ya tienes sesion iniciada.";
            } else {
              sessionStorage.clear();
              sessionStorage.userId = data.user.userId;
              sessionStorage.userName = data.user.userName;
              sessionStorage.token = data.token;
    
              window.location.assign("./chat.html");
            }
          } else {
            document.getElementById("login-error").innerHTML = data.message;
          }
        })
        .catch(
          (err) => (document.getElementById("login-error").innerHTML = err.message)
        );
    });