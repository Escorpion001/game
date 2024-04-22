let user_score=0;
let comp_score=0;

//ACCESSING THE ELEMENTS
let message=document.querySelector("#message");
let user_score_para=document.querySelector("#user-score");
let comp_score_para=document.querySelector("#comp-score");

// GENERATING THE COMPUTER'S CHOICE
function gen_comp_choice(){
    let choice_array=["Stone","Paper","Scissor"];
    let rndidx=Math.floor(Math.random()*3);
    return choice_array[rndidx];    
}
// DRAW GAME CONDITION
function drawgame(){
    message.innerText="It's a draw!!!";
    message.style.backgroundColor="dimgray";

}
// SHOWING THE WINNER AND PRINTING THE MESSAGE
function showWinner(user_win, userchoice, systemchoice){
    if(user_win)
    {
        user_score++;
        user_score_para.innerText=user_score;
        message.style.backgroundColor="Green";
        message.style.transform="scale(1.1)";
        message.innerText=`You Won!!! Your ${userchoice} beats ${systemchoice}`;
    }
    else
    {
        comp_score++;
        comp_score_para.innerText=comp_score;
        message.style.backgroundColor="Red";
        message.innerText=`You Lost!!! ${systemchoice} beats your ${userchoice}`;
    }

}

//CHECKING THE CONDITIONS
function game_play(userchoice){
    let systemchoice=gen_comp_choice();
    if(userchoice===systemchoice){
        drawgame();
        // console.log("It's a draw!!!");
    }
    else{
        let user_win=true;
        if(userchoice==="Stone")//comp choice {{paper--win},{scissor--lose}}
        {
            user_win= systemchoice==="Paper"? false:true;
        }
        else if(userchoice==="Paper")//comp choice {{scissor--win},{stone--lose}}
        {
            user_win= systemchoice==="Scissor"? false:true;
        }
        else if(userchoice==="Scissor")//comp choice {{stone--win},{paper--lose}}
        {
            user_win= systemchoice==="Stone"? false:true;
        }
        showWinner(user_win,userchoice,systemchoice);
    }
    
}
//GETTING THE USER'S CHOICE & CALLING THE MAIN FUCTION
let choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        game_play(userchoice);
    })
    
})