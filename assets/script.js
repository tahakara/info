
//  Lorem ipsum Song 
var audio = document.createElement("AUDIO")




document.body.appendChild(audio);
audio.src = "https://tahakara.dev/assets/lorem.mp3";
audio.volume = 0.4;


function fade() {
    var i = 0;
    var image = document.getElementsByClassName("sence")[0];
    image.style.opacity = 0;
    
    var k = window.setInterval(function() {
      
        if (i >= 200) {
            clearInterval(k);
        } else {
            image.style.opacity = i / 100;
            i++;
        }
    }, 100);
};





document.body.addEventListener("click", function () {
 
    // image transition      .sence opaccity 0  to 1     transition: visibility 0s linear 300ms, opacity 6000ms; 
    fade()
    audio.play()

})



