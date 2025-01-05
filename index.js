function iGotPressed(key) {
  switch (key) {
    case "w":
      var sound = new Audio("sounds/tom-1.mp3");
      return sound.play();
      break;
    case "a":
      var sound = new Audio("sounds/tom-2.mp3");
      return sound.play();
      break;
    case "s":
      var sound = new Audio("sounds/tom-3.mp3");
      return sound.play();
      break;
    case "d":
      var sound = new Audio("sounds/tom-4.mp3");
      return sound.play();
      break;
    case "j":
      var sound = new Audio("sounds/crash.mp3");
      return sound.play();
      break;
    case "k":
      var sound = new Audio("sounds/kick-bass.mp3");
      return sound.play();
      break;
    case "l":
      var sound = new Audio("sounds/snare.mp3");
      return sound.play();
      break;
    default:
  }
}

var drum = document.querySelectorAll("button");

// drum0.addEventListener("click",igotClicked)

for (let i = 0; i < drum.length; i++) {
  drum[i].addEventListener("click", function () {
    var valueButton = this.innerHTML;
    iGotPressed(valueButton);
    buttonAnimation(valueButton);
  });
}

document.addEventListener("keypress", function (event) {
  iGotPressed(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
