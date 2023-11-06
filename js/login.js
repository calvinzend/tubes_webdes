var link = document.getElementById("link");

link.addEventListener("click", function(event) {
  event.preventDefault(); 
  alert("Minimal daftar dulu dek !!")
});
var link2 = document.getElementById("link2");

link2.addEventListener("click", function(event) {
  event.preventDefault(); 
  alert("Minimal daftar dulu dek !!")
});
var link3 = document.getElementById("link3");

link3.addEventListener("click", function(event) {
  event.preventDefault(); 
  alert("Minimal daftar dulu dek !!")
});
var link4 = document.getElementById("link4");

link4.addEventListener("click", function(event) {
  event.preventDefault(); 
  alert("Minimal daftar dulu dek !!")
});


function auth(event) {
    var username = event.username.value;
    var password = event.password.value;
  
    if (username === "kamu@gmail.com" && password === "hehe") {
      window.location.replace("barca.html");
    } else {
      alert("Mohon masukkan Username dan password yang benar!!");
      return false;
    }
    return false;
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  
  console.log("Username: " + username);
  console.log("Email: " + email);
  console.log("Password: " + password);
  function waktu() {
    window.location.href = "login.html"; 
  }

  
  var intervalWaktu = 10000; 

  setTimeout(waktu, intervalWaktu);
  
});


