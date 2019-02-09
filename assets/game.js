

//first make an array of words that the user can guess
var words = [ "sora", "donald", "goofy", "ventus", "aqua", "kairi", "xehanort", "riku", "disney", "square", "mickey", "heartless", "nobodies", "terra", "roxas", "axel"];

//for the music buttons
var music = document.getElementById("KHaudio")

function playAudio() {
    music.play();
}

function pauseAudio(){
    music.pause();
}


      //an to hold the user's previous guesses
var wins = 0;           //to hold the amount of words the user guessed correctly and won (set to 0 for the accumulator)
    //to hold the amount of guesses the user has left
game();
  
function game(){

    var GuessesLeft = document.getElementById("Guesses-left");
    var DisplayWord = document.getElementById("guessingWord");
    var GuessesMade = document.getElementById("lettersGuessed");
    var WinCount = document.getElementById("wins");
  
   //declare how many guesses the user has for each round
   var RemainingGuess = 10; 

   GuessesLeft.textContent = "you have " + RemainingGuess + " guesses left";

    //will choose a random word from the array
   var word = words[Math.floor(Math.random() * words.length)];

  

   //an array to hold what guesses the user makes in each round
   var guesses = []; 


   //create an array to hold the answers
   var answerArray = [];
   
   //create a for loop to decide how many underscores to input into the array
   for (var i=0; i < word.length; i++){
    
    answerArray[i] = "_";  
}




    


    //display how many guesses the user has left
 

    
    DisplayWord.textContent = answerArray.join(" ");

    


    document.onkeyup = function(event){
    
    //will determine what key is pressed
    var userGuess = event.key.toLowerCase();
    
    
    
  
             //to hold the user's guess
        for ( var k=0; k < word.length; k++ ){
            if (userGuess === word[k] ){
                    answerArray.splice(k, 1, userGuess);
                    DisplayWord.textContent = answerArray.join(" ");
                    
            }
            
          
        }
         if (word.includes(userGuess) === false){
            if (guesses.includes(userGuess)){
                alert("you already guessed that")
                
            }
            else{
                RemainingGuess--;
                guesses += userGuess; 
                
            }
        }
       

        
        if (answerArray.includes("_") === false){
            wins++
            var previousWord = word;
            game();
            RemainingGuess = 10;
            guesses = [];
             var displayPrevious = document.getElementById("previousWord");
             displayPrevious.textContent = "the last word was: " + previousWord;
             Image(previousWord);
             
            
            
            
           
           
        }
        else if (RemainingGuess === 0){
                    EndGame();
                    var previousWord = word;
                    game();
                    RemainingGuess = 10;
                    guesses = [];
                    var displayPrevious = document.getElementById("previousWord");
                    displayPrevious.textContent = "the last word was: " + previousWord;
                    
                }

            GuessesMade.textContent = "you guessed these letters: " + guesses + " "; 
            GuessesLeft.textContent = "you have " + RemainingGuess + " guesses left";
            WinCount.textContent = "wins: " + wins; 

            function Image(prevWord){
                var img = document.getElementById("image1");
                if (prevWord === "xehanort"){
                    img.setAttribute("src", "assets/images/xehanort.jpg");
                }
                else if (prevWord === "sora"){
                    img.setAttribute("src", "assets/images/sora.png");
                }
                else if (prevWord === "riku"){
                    img.setAttribute("src", "assets/images/riku.png");
                }
                else if (prevWord === "aqua"){
                    img.setAttribute("src", "assets/images/aqua.png");
                }
                else if (prevWord === "ventus"){
                    img.setAttribute("src", "assets/images/ventus.jpeg");
                }
                else if (prevWord === "kairi"){
                    img.setAttribute("src", "assets/images/kairi.png");
                }
                else if (prevWord === "terra"){
                    img.setAttribute("src", "assets/images/terra.png");
                }
                else if (prevWord === "heartless"){
                    img.setAttribute("src", "assets/images/heartless.png");
                }
                else if (prevWord === "nobodies"){
                    img.setAttribute("src", "assets/images/nobodies.png");
                }
                else if (prevWord === "roxas"){
                    img.setAttribute("src", "assets/images/roxas.png");
                }
                else if (prevWord === "axel"){
                    img.setAttribute("src", "assets/images/axel.png");
                }
                else if (prevWord === "square"){
                    img.setAttribute("src", "assets/images/square.jpg");
                }
                else if (prevWord === "disney"){
                    img.setAttribute("src", "assets/images/disney.jpg");
                }
                else if (prevWord === "goofy"){
                    img.setAttribute("src", "assets/images/goofy.png");
                }
                else if (prevWord === "mickey"){
                    img.setAttribute("src", "assets/images/mickey.png");
                }
                else{
                    img.setAttribute("src", "assets/images/donald.png");
                }
            }

           
        

}

    


    }


    function EndGame(){
        alert("I am sorry you ran out of guesses and must start a new game");
    }




    




