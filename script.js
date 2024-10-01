let user=0;
let comp=0;
let choice=document.querySelectorAll(".choice");
let msg=document.querySelector(".message");
let userscore=document.querySelector("#user");
let compscore=document.querySelector("#comp");


const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
     const randix=Math.floor(Math.random()*3);
     return options[randix];

}
const drawgame=(userid ,compid)=>{
    console.log("game is a draw");
    msg.innerText=`game is draw.both choose ${userid}`;
    msg.style.backgroundColor="blue";
}
const showwinner=(userwin,userid,compid)=>{
    if(userwin==true){
         user++;
         userscore.innerText=`${user}\n you`;
          console.log(`yahooo! you win ${userid} beats ${compid}`);
    msg.innerText=`yahoo! you win ${userid} beats ${compid}`;
    msg.style.backgroundColor="green";}
    else{
        comp++;
        compscore.innerText=`${comp}\n comp`;
    console.log("computer win ");
    msg.innerText=`oops! computer wins ${compid} beats ${userid}`;
    msg.style.backgroundColor="red";
    }
}

const playgame=(( userid)=>{
    console.log("user choice=",userid);
    const compid=gencompchoice();
    console.log("computer choice is :" ,compid);
    if(userid===compid){
        drawgame(userid,compid);
    
    }
    else{
        let userwin=true;
        if(userid==="rock"){
            //scissor,paper
             userwin=compid==="paper"?false:true;
        }
        else if(userid==="paper"){
                    //rock,scissor
                    userwin=compid==="scissor"?false:true;
        }
        else{
            //rock,paper
            userwin=compid==="rock"?false:true;
        }

            showwinner(userwin,userid,compid);
        }
    });


    



choice.forEach((choice)=>{
        let userid=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        
        playgame(userid);
    });
});
