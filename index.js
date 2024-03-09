let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    // rock , paper , scissors
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drwaGame = () =>{
    msg.innerText = "Game Was Draw. Play again."
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    // console.log("user choice = "+userChoice)
    //Generate Computer Choice -> modular

    const compChoice = genCompChoice();

    // console.log("comp choice =" , compChoice)

    if(userChoice == compChoice){
        // Draw Game
        drwaGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            // scissors , paper
           userWin = compChoice === "paper" ? false : true;

        }else if(userChoice == "paper"){
            //rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // rock , paper
            
            userWin = compChoice === "rock" ? false : true ;
        }

        showWinner(userWin , userChoice , compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    })
    
})