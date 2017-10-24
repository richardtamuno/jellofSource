var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var reset = document.querySelector("#reset");
var p1Score= 0;
var p2Score = 0;
var gamerOver = false;
var winningScoer = 5;

p1Button.addEventListener("click", function(){
    if(!gamerOver){
    p1Score++;
    if (p1Score === winningScoer) {
        gamerOver = true;
    }
    p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!gamerOver){
            p2Score++;
    if(p2Score === winningScoer){
        gamerOver = true ;
    }
    p2Display.textContent = p2Score;
    }

});

reset.addEventListener("click", function(){
    p1Display.textContent = 0;
    p2Display.textContent = 0;
})