function Back(){
    window.location = "activity_1.html";
}

function getScore(){
    score = localStorage.getItem("score");
    document.getElementById("output").innerHTML = "score: "+score ;
}