score = 0;

function updatescore(){
    score = score + 1;
    document.getElementById("score").innerHTML = "score: "+ score;

}

function Savescore(){
    localStorage.setItem("score", score);

}

function Nextpage(){
    window.location = "activity_2.html";

}