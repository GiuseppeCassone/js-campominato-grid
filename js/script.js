const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click",
 function() {
    
    const gridElement = document.querySelector(".grid");

    for(let i = 1; i <= 100; i++){

    const newElement = document.createElement("div");
    newElement.className = "square";
    newElement.innerHTML = i;
    newElement.style.fontWeight = "bold";
    newElement.style.fontSize = "18px";

    gridElement.append(newElement);
    
    }

 })