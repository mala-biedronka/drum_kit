//Detecting button press
let buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
}

//Detecting keyboard press
document.addEventListener("keypress", function (event) {
    makeSound(event.key);

    buttonAnimation(event.key);
})

// Making sound depending on mouse click or press the key
function makeSound (key){

    switch (key) {
        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default: console.log(buttonInnerHTML);
    }
}

// Animation depending on mouse click or press the key

//We can call this function in both places where we make sound (look above)
    function buttonAnimation (currentKey) {

    //This is the button that we are going to change its style
    var activeButton = document.querySelector("." + currentKey);

    //Adding a new class to change its stylw
    activeButton.classList.add("pressed");

    //Removing this class after a delay
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100)
    }

























