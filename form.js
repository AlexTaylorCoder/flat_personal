const form = document.querySelector("form")

form.addEventListener("submit",sendEmail)


function sendEmail() {
    Email.send({
        SecureToken: "7d689560-e795-49fe-b035-116f60568b4d",
        To : "alextaylor515@gmail.com",
        From : document.getElementById("email").value,
        Subject : "Contact form inquiry",
        Body : "Name" + document.getElementById("name").value + "<br>" + document.getElementById("email").value + "<br">
         + document.querySelector("form #message").value
    }).then(
      message => alert(message)
    );
    debugger
}
