const button = document.querySelector(".container button"); 
const jokeText = document.querySelector(".container p"); 
button.addEventListener("click", getJoke);

const audio = document.getElementById("myAudio");
const like = document.getElementById('like') 
const count = document.getElementById('counter');
like.addEventListener('click', myfunction)
   
    
function myfunction() {
      count.innerHTML = parseInt(count.innerHTML) +1;
    }

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







    