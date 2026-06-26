let humanScoreBoard = document.querySelector(".pointers .content .you .you-pt")
let pcScoreBoard = document.querySelector(".pointers .content .pc .pc-pt")
let humanChoiceBoard=document.querySelector(".third .content .you .human_img")
let pcChoiceBoard=document.querySelector(".third .content .pc .pc_img")


document.querySelector(".overlay button").addEventListener("click",()=>{
  startGame()
})

let humanScore=0
let pcScore=0
let rounds=0;

let pc;
let human;
let message = document.querySelector(".fourth .msg");

document.querySelector(".sixth button").addEventListener("click",()=>{
  startGame()
})


document.querySelector(".fifth .content").addEventListener("click",(event)=>{
  if(event.target.classList.contains("rock")) human="rock";
  else if (event.target.classList.contains("paper")) human="paper"
  else if(event.target.classList.contains("scissors")) human="scissors"
  round()
})


function startGame(){
  rounds=0;
  document.querySelector(".overlay").style.display="none"
  humanScore=0
  pcScore=0
  humanChoiceBoard.textContent="❓"
  pcChoiceBoard.textContent="❓"

  humanScoreBoard.textContent=humanScore
  pcScoreBoard.textContent=pcScore
  message.textContent="Pick your move"
}


function round(){

  pc=Math.floor(Math.random()*3)
  if(pc==0) {pc="rock" 
   pcChoiceBoard.textContent="🪨"

  }
  else if(pc==1) {pc="paper"
  pcChoiceBoard.textContent="📄"

  }
  else if (pc==2) {pc="scissors"
    pcChoiceBoard.textContent="✂️"
  }

  if(pc==human) {message.textContent="It's a Draw!"
    humanChoiceBoard.textContent=pcChoiceBoard.textContent
  }
  
  else if(pc=="rock" && human=="paper") {message.textContent="You Win This Round!"
    humanChoiceBoard.textContent="📄"
    humanScore++
  }
  else if(pc=="paper" && human=="rock") {message.textContent="Computer Wins This Round!" 
    humanChoiceBoard.textContent="🪨"

  pcScore++
  }
  else if(pc=="paper" && human=="scissors") {message.textContent="You Win This Round!"
  humanChoiceBoard.textContent="✂️"
  humanScore++
  }
  else if(pc=="scissors" && human=="paper") {message.textContent="Computer Wins This Round!"
  humanChoiceBoard.textContent="📄"
  pcScore++
  }
  else if(pc=="scissors" && human=="rock") {message.textContent="You Win This Round!"
    humanScore++
    humanChoiceBoard.textContent="🪨"

  }
  else if(pc=="rock" && human=="scissors") {message.textContent="Computer Wins This Round!"
    pcScore++
    humanChoiceBoard.textContent="✂️"

  }

  humanScoreBoard.textContent=humanScore
  pcScoreBoard.textContent=pcScore

  rounds++
  if(rounds==5) showResults() 
  human=undefined
}


function showResults(){
  let decMsg=document.querySelector(".end .dec")
  let decMsg2=document.querySelector(".end .dec-msg")


  if(humanScore>pcScore) {
    decMsg.textContent="🏆You Win!"
    decMsg.style.color="greenyellow"
    decMsg2.textContent="you crushed the computer "+humanScore+"- "+pcScore

  }

  else if(humanScore<pcScore) {
    decMsg.textContent="💀You Lose!"
    decMsg.style.color="red"
    decMsg2.textContent="computer Won "+pcScore+"- "+humanScore
  }

  else {
    decMsg.textContent="Draw!"
    decMsg.style.color="gray"
    decMsg2.textContent="Draw! "+pcScore+"- "+humanScore
  }
  document.querySelector(".overlay").style.display="block"


}

startGame()


