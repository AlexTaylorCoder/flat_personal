const form = document.querySelector("form")

form.addEventListener("submit",sendEmail)

const message = "eee"

function sendEmail() {
    Email.send({
        SecureToken: "0b50be03-dda9-44f2-a5d7-d2d53cc3cfe8",
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
