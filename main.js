const myLabel = document.getElementById("myLabel");
const myRoll = document.getElementById("myRoll");

myRoll.onclick = function(){
    randomNum= Math.floor(Math.random()*6)+1;
    myLabel.textContent = randomNum
}
