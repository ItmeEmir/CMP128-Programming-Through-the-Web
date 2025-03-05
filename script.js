let mood = ["Happy","Neutral","Sad"]
function displayMood(){
    let randomMoodIndex = Math.floor(Math.random()*mood.length);
let myMood=mood[randomMoodIndex]
    let moodDivElement= document.getElementById("myMood");
    moodDivElement.innerHTML=myMood;
}
