const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click",
 function() {
    
// Creazione griglia da 10 x 10
    const gridElement = document.querySelector(".grid");

    for(let i = 1; i <= 100; i++){

    const newElement = document.createElement("div");
    newElement.className = "square";
    newElement.innerHTML = i;
    newElement.style.fontWeight = "bold";
    newElement.style.fontSize = "14px";

    gridElement.append(newElement);

    }

 })