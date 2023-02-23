// selecting all the buttons and assigning them to the "numberofbutton" variable
var numberofbutton = document.querySelectorAll(".drum").length;

//looping through all the button tags
for(var i=0; i<numberofbutton; i++){
 
 //selecting a each button and adding the event listener
 //this part of the code works for clicks 
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var button = this.innerHTML;
        playsound(button);
        buttonanimation(button);
        
    });
}

//this part of the code works for the inputs from keyboard
document.addEventListener("keypress",function(event){
    playsound(event.key);
    buttonanimation(event.key);
})

//assigning audio to a particular button using switch-case
function playsound(key){
    switch(key){
            case "a":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
            break;
                
            case "s":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;
                
            case "d":
                var tom3= new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;
                
            case "f":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;
                
            case "j":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
            break;
                
            case "k":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
            break;
                
            case "l":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
            break;
                
            default: console.log(button);
                
        }    
}

//animation when a particular button is clicked or pressed
function buttonanimation(currentkey){
    var activebutton  = document.querySelector("."+currentkey);
    activebutton.classList.add('pressed');
    setTimeout(function(){
        activebutton.classList.remove('pressed');}, 100);
}
