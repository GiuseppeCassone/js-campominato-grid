const buttonEl = document.querySelector("button");
let newElement;

buttonEl.addEventListener("click",
 function() {
    
// Creazione griglia da 10 x 10
    let gridElement = document.querySelector(".grid");
    gridElement.innerHTML = "";
    let gridLevel = decideDifficult();

    for(let i = 1; i <= gridLevel; i++){

        newElement = document.createElement("div");
        newElement.innerHTML = i;
        newElement.style.fontWeight = "bold";
        newElement.style.fontSize = "14px";
        otherDifficultClass(newElement);

        newElement.addEventListener("click", 
        function(){

            this.classList.toggle("active");
            console.log(this.innerText);
        })

        gridElement.append(newElement);

    }

 })

 function decideDifficult() {
    let difficultOptions = 0;
    let selectOptions = document.getElementById(`options`).value;

    if(selectOptions == "1") {

        difficultOptions = 49;
    }

    if(selectOptions == "2") {

        difficultOptions = 81;
    }

    if(selectOptions == "3") {

        difficultOptions = 100;
    }

    return difficultOptions;
 }


 function otherDifficultClass(sizeCell) {

    let squareClass = "a";

    if(decideDifficult() == 49){
        squareClass = "little-square";
        sizeCell.classList.add(squareClass);

    }
    
    if(decideDifficult() == 81) {
        squareClass = "medium-square";
        sizeCell.classList.add(squareClass);
    }
    
    if(decideDifficult() == 100){
        squareClass = "square";
        sizeCell.classList.add(squareClass);
    }

 }