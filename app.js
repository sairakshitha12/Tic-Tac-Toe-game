let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset")
let newbtn=document.querySelector("#new-btn")
let msg=document.querySelector("#msg")
let msgcontainer=document.querySelector(".msg-container")

let turnO=true;//playerX,playerO
const winpatterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
    
});
const showwinner=(winner)=>{
    msg.innerText=`congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");


}
const resetgame=()=>{
    turnO=true;
    enablebtn();
    msgcontainer.classList.add("hide");

}
const disablebtn=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const enablebtn=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const checkwinner = () => {
    for (let pattern of winpatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
        let pos1val=boxes[pattern[0]].innerText;   
        let pos2val=boxes[pattern[1]].innerText;   
        let pos3val=boxes[pattern[2]].innerText;   
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val)
                disablebtn();
            }
        }
    }

};
newbtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)