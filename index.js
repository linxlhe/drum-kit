
// make sure all the buttons have event listener
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
    });
}
