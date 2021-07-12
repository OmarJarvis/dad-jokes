const button = document.querySelector(".container button");
const jokeText = document.querySelector(".container p");
document.addEventListener("DOMContentLoaded", getJoke);

const audio = document.getElementById("myAudio"); 
const counter = document.getElementById("counter"); 

button.addEventListener("click", getJoke);
audio.addEventListener("click", likeCount)


async function getJoke() {
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }

    });
    const jokeObj = await jokeData.json();
    jokeText.innerHTML = jokeObj.joke;
} 

function playAudio() { 
  audio.play(); 
} 

function likeCount() { 
  counter.innerHTML = 0
  counter++
} 



