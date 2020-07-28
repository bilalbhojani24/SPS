var i = 0;
var j = 0;

window.addEventListener('load', ()=>{
    var name = prompt("Enter your name to play game");
    document.getElementById("username").innerHTML=name;
    var userresult = document.getElementById("userresult");
    var computerresult = document.getElementById("computerresult");
    userresult.innerHTML = i;
    computerresult.innerHTML = j;
});

function Stone(){
    var userresult = document.getElementById("userresult");
    var computerresult = document.getElementById("computerresult");
    var computerschoice = Math.random();
    if(computerschoice>0 && computerschoice<=0.33){
        document.getElementById("comchoice").innerHTML = "Computer's choice is : Stone";
        result.innerHTML = "Match Tie";
        result.style.color = "black";
    }
    else if(computerschoice>=0.33 && computerschoice<=0.67){
        document.getElementById("comchoice").innerHTML = "Computer's choice is : paper";
        result.innerHTML = "Ooops! computer won";
        result.style.color = "red";
        i++;
        computerresult.innerHTML = i;
    }
    else{
        document.getElementById("comchoice").innerHTML = "Computer's choice is : Scissor";
        result.innerHTML = "Congratulations! You Won";
        result.style.color = "green";
        j++;
        userresult.innerHTML = j;
    }
}
function Paper(){
    var userresult = document.getElementById("userresult");
    var computerresult = document.getElementById("computerresult");
    var computerschoice = Math.random();
    var result = document.getElementById("result");
    // var compbutton = document.getElementById("compbutton");
    if(computerschoice>0 && computerschoice<=0.33){
        document.getElementById("comchoice").innerHTML = "Computer's choice is : Stone";
        result.innerHTML = "Congratulations! You Won";
        result.style.color = "green";
        j++;
        userresult.innerHTML = j;
    }
    else if(computerschoice>0.68 && computerschoice<=1){
        document.getElementById("comchoice").innerHTML = "Computer's choice is : paper";
        result.innerHTML = "Match Tie";
        result.style.color = "black";
    }
    else{
        document.getElementById("comchoice").innerHTML = "Computer's choice is : Scissor";
        result.innerHTML = "Ooops! computer won";
        result.style.color = "red";
        i++;
        computerresult.innerHTML = i;
        
    }
}
function Scissor(){
    var userresult = document.getElementById("userresult");
    var computerresult = document.getElementById("computerresult");
    var result = document.getElementById("result");
    var computerschoice = Math.random();
    if(computerschoice>0.68 && computerschoice<=1){
        document.getElementById("comchoice").innerHTML = "Computer's choice is : Stone";
        result.innerHTML = "Ooops! computer won";
        result.style.color = "red";
        i++;
        computerresult.innerHTML = i;
    }
    else if(computerschoice>=0.33 && computerschoice<=0.67){
        document.getElementById("comchoice").innerHTML = "Computer's choice is : paper";
        result.innerHTML = "Congratulations! You Won";
        result.style.color = "green";
        j++;
        userresult.innerHTML = j;
    }
    else{
        document.getElementById("comchoice").innerHTML = "Computer's choice is : Scissor";
        result.innerHTML = "Match Tie";
        result.style.color = "black";
    }
}

function reset(){
     userresult = document.getElementById("userresult").innerHTML = "0";
     computerresult = document.getElementById("computerresult").innerHTML = "0";
     result = document.getElementById("result").innerHTML = "Result";
     result = document.getElementById("result").style.color = "Black";
     document.getElementById("comchoice").innerHTML = " ";
     i=0;
     j=0;
    }

    // computerschoice>=0.33 && computerschoice<=0.67
    // computerschoice>0 && computerschoice<=0.33
    // computerschoice>0.68 && computerschoice<=1