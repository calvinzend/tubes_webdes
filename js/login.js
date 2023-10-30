function auth(event) {
    var username = event.username.value;
    var password = event.password.value;

    if (username === "admin@gmail.com" && password === "user") {
      window.location.replace("../barca.html");
    } else {
      alert("Mohon masukkan Username dan password yang benar!!");
      return false;
    }
    return false;
}
document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const registrationMessage = document.getElementById('registrationMessage');
  
    registrationForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const username = registrationForm.querySelector('#username').value;
      const email = registrationForm.querySelector('#email').value;
      const password = registrationForm.querySelector('#password').value;
  
      
     
      registrationMessage.innerHTML = `<p>Registrasi berhasil untuk username: ${username}</p>`;
    });
  });