
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event){
        const userResponse = window.confirm ("Are you sure you want to submit this form? ");
        if (!userResponse)
            event.preventDefault();
    });
});

function resetFunction(){
    document.getElementById("booking-form").reset();
}
window.onload = function() {
    resetFunction();
};

var helpArray = [
    "Select your trainer. Trainer can be changed later.", "More than 4 hours of playsession is not allowed.",
    "This button submits the form. Make sure your entered details are correct", "This button clears the form", " "
];

function showHelp (){
    const text = document.getElementById("text");

    registerListeners(document.getElementById("trainer"), 0);
    registerListeners(document.getElementById("playsession"), 1);
    registerListeners(document.getElementById("submitButton"), 2);
    registerListeners(document.getElementById("clearButton"), 3);
}

function registerListeners(object, elementNumber){
    object.addEventListener("focus", function () { text.innerHTML = helpArray[elementNumber];}, false);
    object.addEventListener("blur", function () { text.innerHTML = helpArray[4];}, false);
}

window.addEventListener("load", showHelp, false);


function hiddenFunctionAdoption(){
    var hiddenPart = document.getElementById("adoptQuestions");
    var hiddenPart1 = document.getElementById("trainingQuestions");
    var hiddenPart2 = document.getElementById("playtimeQuestions");
    hiddenPart.style.display = "block";
    hiddenPart1.style.display = "none";
    hiddenPart2.style.display = "none";
}

function hiddenFunctionPlaytime(){
    var hiddenPart = document.getElementById("playtimeQuestions");
    var hiddenPart1 = document.getElementById("trainingQuestions");
    var hiddenPart2 = document.getElementById("adoptQuestions");
    
    hiddenPart.style.display = "block";
    hiddenPart1.style.display = "none";
    hiddenPart2.style.display = "none";
}


function hiddenFunctionTraining(){
    var hiddenPart = document.getElementById("trainingQuestions");
    var hiddenPart1 = document.getElementById("playtimeQuestions");
    var hiddenPart2 = document.getElementById("adoptQuestions");
    hiddenPart.style.display = "block";
    hiddenPart1.style.display = "none";
    hiddenPart2.style.display = "none";
       
}

function dogBreeds(){
    var hiddenPart = document.getElementById("breedDogs");
    var hiddenPart1 = document.getElementById("breedCats");
    hiddenPart.style.display = "block";
    hiddenPart1.style.display = "none"
}

function catBreeds(){
    var hiddenPart = document.getElementById("breedCats");
    var hiddenPart1 = document.getElementById("breedDogs");
    hiddenPart.style.display = "block";
    hiddenPart1.style.display = "none"
}