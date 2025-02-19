var schmoDiv = document.getElementById("schmo marie");
//schmoDiv.hidden = false;
if(schmoDiv === null){
    //do smth!
}
console.log(schmoDiv);


function ourDivWasClicked(){
    if(schmoDiv.innerHTML === "hello"){
    schmoDiv.innerHTML = "howdy!";
    }else{
        schmoDiv.innerHTML = "hello";
    }
}

schmoDiv.onclick = ourDivWasClicked;