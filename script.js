let userscore = 0;
let compscore = 0;


const choices = document.querySelectoAll(".choice");
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
msg.style.bachgroundcolor = " #081b31;";
};

const showWinner = (userWin, userChoice, compChoice)  => {
  if (userWin){ 
    userScore++;
    userScorePara.innerText = userScore;
    console.log(" Me win !");
    msg.innerText = `Me win!. your $ {userChoice} beats $ {compChoice}`;
    msg.style.bachgroundcolor = "pink";
    
  } else {
    compScore++;
    compScorePara.innerText = compScore;
       console.log("you lose !");
    msg.innerText =`you lose!. $ {compChoice} beats  your $ {userChoice}`;
    msg.style.backgroundcolor = "red";
  }
    
      

const playGame = (userChoice)  =>  {
  console.log ("user choice = " , userChoice);
  //computer choice
  const compChoise = genCompChoise();
  console.log("comp choice = ", compChoise);

  if (userChouce === compChoice);{
  drewGame();
} else  {
  let userWin = true;
    if (userWin ==="rock") {
      //scissors,paper
      userWin = compChoice === "paper" ? false : true;
} else if (userChoice ==="paper"){
      //rock,scissors
  userWin = compChoice === "scissors" ? false : true;
} else {
      //rock,paper
         userWin = compChoice === "rock" ? false :  true ;
        }
    showWinner (userWin,userChoice,compChoice);
};

choices.forEach((choice)  => {
  choice.addEventListener("click",()  => {
    const  userChoise = choice.getAttribute ("id");
    playGame(userChoice);
  });
});
