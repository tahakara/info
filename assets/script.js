
//  Lorem ipsum Song 
var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "https://tahakara.dev/assets/lorem.mp3";
audio.volume = 0.4;
document.body.addEventListener("mousemove", function () {
    audio.play()
})



