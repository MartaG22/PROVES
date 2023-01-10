document.querySelector(".entry-form").addEventListener("submit", (e) => {
      e.preventDefault();
    
      sessionStorage.clear();

      const userName = document.querySelector('entry-form [name="username"]').value;
      const password = document.querySelector('entry-form [name="password"]').value;
      const apiUrl = "http://localhost:3000";
      console.log(userName, password)
      
      fetch(apiUrl + "/login", {
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
                "Ja tens sessió iniciada.";
            } else {
              sessionStorage.clear();
              sessionStorage.userId = data.user.idUsuari;
              sessionStorage.userName = data.user.nomUsuari;
              sessionStorage.token = data.user.passwordUsuari;
              // sessionStorage.token = data.token;
    
              window.location.assign("./xat.html");
            }
          } else {
            document.getElementById("login-error").innerHTML = data.message;
          }
        })
        .catch(
          (err) => (document.getElementById("login-error").innerHTML = err.message)
        );
    });