document.querySelector(".entry-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const userName = document.querySelector(
        '.entry-form [name="username"]'
    ).value;
    const password = document.querySelector(
        '.entry-form [name="password"]'
    ).value;
    const apiUrl = "http://localhost:3000";

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
                    sessionStorage.userName == data.user.nomUsuari
                ) {
                    document.getElementById("showError").innerHTML = "Ja tens sessió iniciada.";
                } else {
                    sessionStorage.clear();
                    sessionStorage.userId = data.user.userId;
                    sessionStorage.userName = data.user.userName;
                    sessionStorage.token = data.token;

                    window.location.assign("../HTML/xat.html");
                }
            } else {
                document.getElementById("showError").innerHTML = data.message;
            }
        }).catch(
            (error) =>
                (document.getElementById("showError").innerHTML = error.message)
        );
});


function deleteError() {
    document.getElementById("showError").innerHTML = "";
}
