var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfSquares = 6;
     colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colors of squares
    message.textContent = "";
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "new colors";
    for(var i=0; i< squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        h1.style.backgroundColor = "steelblue"
    }

});

colorDisplay.textContent = pickedColor;
 for (var i = 0; i < squares.length; i++) {
     //add initial colors to squares
     squares[i].style.backgroundColor = colors [i];

     // add click listeners to squares
     squares[i].addEventListener("click", function(){
         // grab color of clicked square
         var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            message.textContent="Correct";
            resetButton.textContent = "Play Again"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else{
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
            resetButton.textContent = "New Colors";
        }
     })
     
 }

 function changeColors(color){
     //Loop through all squares
     for(var i =0; i < squares.length; i++){
         //Change each colors
         squares[i].style.backgroundColor = color;
     }
 }

 function pickColor(){
     var random = Math.floor(Math.random() * colors.length);
     return colors[random];
 }

 function generateRandomColors(num){
     //make and array
     var arr = [];
     // add num random colors to array
     for (var i= 0; i<num; i++){
         arr.push(randomColor());
            //get random color and push into arr
     }
        //return that array
        return arr;
 }

 function randomColor(){
     //pick a "red" from 0-255
     var r =  Math.floor(Math.random() * 256);
     //pick a "green" from 0-255
     var g =  Math.floor(Math.random() * 256);
     //pick a "blue" form 0-255
     var b =  Math.floor(Math.random() * 256);
     return "rgb(" + r + ", " + g + ", " + b + ")";

 }