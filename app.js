let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;

// winPatterns it is winnig pattens
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

//it display X and O value with style
boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
        console.log("cliked")
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            box.style.color="#548687";
            turnO=true;
        }
        box.disabled=true;

        checkwinner();
    });
});


//if the O or X win the game then after all button disable 
const disabaleBtn=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

//if user click on reset or new Game button then the button is enable
const enabaleBtn=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

//display Winnig message
const showWinner=(winner)=>
{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabaleBtn();
}
//display no winner message
const showLoss = () => {
    msg.innerText = "No winner!";
    msgContainer.classList.remove("hide");
    disabaleBtn();
}

// it check the wiiner
const checkwinner=()=>
{
    for (let patterns of winPatterns) {
        // console.log(patterns[0],patterns[1],patterns[2]);
        // console.log(
        //     boxes[patterns[0]].innerText,
        //     boxes[patterns[1]].innerText,
        //     boxes[patterns[2]].innerText,
        // );
        let pos1=boxes[patterns[0]].innerText;
        let pos2=boxes[patterns[1]].innerText;
        let pos3=boxes[patterns[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3!="")
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
                // console.log("winner",pos1);
                showWinner(pos1);
            }
        }
    }
     // If all boxes are filled and no winner
    let filled = true;
    boxes.forEach(box => {
        if (box.innerText === "") filled = false;
    });
    if (filled) {
        showLoss();
    }
}

//it reset the game
const resetGame=()=>
{
    turnO=true;
    enabaleBtn();
    msgContainer.classList.add("hide");
}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame)