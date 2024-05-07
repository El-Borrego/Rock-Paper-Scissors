let player = document.getElementById("user-choice");
let cpu = document.getElementById("computer-choice");
let result = document.getElementById("winner-display")

document.getElementById("choice-bubble").addEventListener("click", function animate(){
    let hasAnimation = false;
    if(hasAnimation == false){
        player.classList.add("animation");
        //player.classList.add("active");
        hasAnimation = true; 
        setTimeout(function(){
            player.classList.remove("animation");
        }, 3000)
    }
})
document.getElementById("choice-bubble").addEventListener("click", function animate(){
    let hasAnimation = false;
    if(hasAnimation == false){
        cpu.classList.add("CPU-animation");
        hasAnimation = true; 
        setTimeout(function(){
            cpu.classList.remove("CPU-animation");
        }, 3000)
    }
})
document.getElementById("choice-bubble").addEventListener("click", function(e){
    //console.log(e.target.textContent);
    player.textContent = "✊";
    cpu.textContent = "✊";
    e.target.classList.add("active");
    setTimeout(function(){
        player.textContent = e.target.textContent;
        e.target.classList.remove("active");
    },3000)
})

let choices = ["rock","paper","scissors"];
let displayChoices = ["✊","🖐","✌"]

function letsPlay(choice){
    let equation = Math.floor(Math.random() * 3)
    let computerChoice = choices[equation]
    let cpuEmoji = displayChoices[equation]
    result.textContent = "Who's gunna win?";
    setTimeout(function(){
        if(choice == computerChoice){
            result.textContent = "It's a tie";
        }
        else{
            switch(choice){
                case "rock":
                    result.textContent = (computerChoice == "scissors" ? "You win" : "You Lost")
                    break;
            }
            switch(choice){
                case "paper":
                    result.textContent = (computerChoice == "scissors" ? "You lose" : "You win")
                    break;
            }
            switch(choice){
                case "scissors":
                    result.textContent = (computerChoice == "rock" ? "You lose" : "You win");
                    break;
            }
        }
    },3000)


/*

    if(choice == "paper" && computerChoice == "rock"){
        result.textContent = "You Win";
    }
    if(choice == "paper" && computerChoice == "scissors"){
        result.textContent = "You Lose";
    }
    if(choice == "rock" && computerChoice == "paper"){
        result.textContent = "You Lose";
    }
    if(choice == "rock" && computerChoice == "scissors"){
        result.textContent = "You Win";
    }
    if(choice == "scissors" && computerChoice == "rock"){
        result.textContent = "You Lose";
    }
    if(choice == "scissors" && computerChoice == "paper"){
        result.textContent = "You Win";
    }
*/
    setTimeout(function(){
        cpu.textContent = cpuEmoji
    },3000)

}


/*
    oh yea!! other idea was assigning the below the other way around..
    like (let "fist emoji" = choices[0])

    don't think that's going to work...

    but.. let's... let this function be what it is... and decide winner
    and loser...

    then.. a seperate function we'll do this whole decider thing
*/


/*
    choices[0] = "✊";
    choices[1] = "🖐";
    choices[2] = "✌";
    console.log("you chose: " + choice);
    console.log("computer chose: " + computerChoice);
    setTimeout(function(){
        cpu.textContent = computerChoice
    },3000)
*/
    
/*
    Her parents are as fucking annoying as she is about food shit
    so... I have to go at least make a plate of food before they 
    either freak out.. or just put the shit away in the next
    three fucking minutes...

    also... sadly... I have no fucking sodas or anything to drink with
    this shit :(

    also also... this logic should work... and seems to really well
    at least on the first click... and that's because weirdly it gets
    the results the first time before shit gets converted or something...

    so... need to look into that... also... see if maybe I can just do this
    shit first... then the other shit... so just put this bit of code before 
    I change what the indexes are equal to and shit.. might work...

    also... want to try... I forgot what the fuck else I wanted to try...

    if(choice == computerChoice){
        result.textContent = "It's a tie"
    }
    if(choice == "paper" && computerChoice == "rock"){
        result.textContent = "You Win"
    }
    if(choice == "paper" && computerChoice == "scissors"){
        result.textContent = "You lose"
    }
    if(choice == "rock" && computerChoice == "paper"){
        result.textContent = "You lose"
    }
    if(choice == "rock" && computerChoice == "scissors"){
        result.textContent = "you win"
    }
    if(choice == "scissors" && computerChoice == "rock"){
        result.textContent = "you lose"
    }
    if(choice == "scissors" && computerChoice == "paper"){
        result.textContent = "you win"
    }
*/


//}