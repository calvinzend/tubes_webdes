window.addEventListener("scroll", function() {
    let news = document.querySelector(".news");
    let fullteam = document.querySelector(".teamUtama");
    let muncul = news.getBoundingClientRect().top;
    let muncul2 = fullteam.getBoundingClientRect().top;
    let halfWindowHeight = window.innerHeight * 1.5;


    if (muncul < window.innerHeight) {
      news.style.transform = "translateY(0)";
      news.style.opacity = 1; 
    }
    if (muncul2 < halfWindowHeight) {
      fullteam.style.transform = "translateY(0)";
      fullteam.style.opacity = 1; 
    }
    });

    var audio = document.getElementById("myAudio");
    audio.play();