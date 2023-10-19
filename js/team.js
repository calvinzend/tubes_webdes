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
