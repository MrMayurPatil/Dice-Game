let randomNum1=Math.floor(Math.random()*6)+1;
let dice1="./img/"+randomNum1+".png"
let img1=document.querySelectorAll("img")[0]
img1.setAttribute("src",dice1);

let randomNum2=Math.floor(Math.random()*6)+1;
let dice2="./img/"+randomNum2+".png"
let img2=document.querySelectorAll("img")[1]
img2.setAttribute("src",dice2);

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="player 1 win"
}
else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML="player 2 win"
}
else{
    document.querySelector("h1").innerHTML="draw"
}



