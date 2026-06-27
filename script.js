let userscore = 0;
let compscore = 0;


const choices = document.querySelectoAll(".choices");
const msg = document.querySelector ("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const getCompChoice = ()  =>  {
  const options =["rock", "paper" , "scissors"];
  const  randIdx = Math.floor(Math.random() * 3);
  return option [randIdx];
};

const drawGame = () => {
msg.innerText = "Game was Draw. Play Again !";
msg.style.backgroundcolor = " #081b31";
  msg.style.color="white";
};

const showWinner = (userWin, userChoice, compChoice)  => {
  if (userWin){ 
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `Me win!. your $ {userChoice} beats $ {compChoice}`;
    msg.style.bachgroundcolor = "pink";
    msg.style.color="white";
    
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText =`you lose!. $ {compChoice} beats  your $ {userChoice}`;
    msg.style.backgroundcolor = "red";
    msg,style.color= "white";
  }
    
      

const playGame = (userChoice)  =>  {
  console.log ("User choice = " , userChoice);
  
  const compChoise = genCompChoise();
  console.log("computer choice = ", compChoise);

  if (userChouce === compChoice);{
  drewGame();
} else  {
  let userWin = true;
    if (userChoice ==="rock") {
      
      userWin = compChoice === "paper" ? false : true;
} else if (userChoice ==="paper"){
      //rock,scissors
  userWin = compChoice === "scissors" ? false : true;
} else {
      //rock,paper
         userWin = compChoice === "rock" ? false :  true ;
        }
    showWinner (userWin,userChoice,compChoice);
  }
};

choices.forEach((choice)  => {
  choice.addEventListener("click",()  => {
    const  userChoise = choice.getAttribute ("id");
    playGame(userChoice);
  });
});
