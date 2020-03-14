// let buttons = document.querySelectorAll("button");
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function () {
//         alert("Hi there!");
//     });
// }

let buttons = document.querySelectorAll(".drum");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        this.style.color = "white";

    });
}

// let audio = new Audio("sounds/tom-1.mp3");
// audio.play();