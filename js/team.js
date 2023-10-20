let index = 0;

function tampilkanGambar(n) {
    const gambar = document.getElementsByClassName("slider");
    const titles = document.getElementsByTagName("h2");
    
    for (let i = 0; i < gambar.length; i++) {
        gambar[i].style.display = "none";
    }
    
    index = n;
    
    if (index >= gambar.length) {
        index = 0;
    }
    
    gambar[index].style.display = "block";
    titles[index].style.display = "block";
}

function nextSlide() {
    tampilkanGambar(index + 1);
}


tampilkanGambar(index);

setInterval(nextSlide, 3000);



window.addEventListener("scroll", function() {
    let lineup = document.querySelector(".lineup");
    let fullteam = document.querySelector(".fullteam");
    let muncul = lineup.getBoundingClientRect().top;
    let muncul2 = fullteam.getBoundingClientRect().top;


    if (muncul < window.innerHeight) {
      lineup.style.transform = "translateY(0)";
      lineup.style.opacity = 1; 
    }
    if (muncul2 < window.innerHeight) {
      fullteam.style.transform = "translateY(0)";
      fullteam.style.opacity = 1; 
    }
  });
