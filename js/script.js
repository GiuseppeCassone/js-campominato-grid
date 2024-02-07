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

        newElement.addEventListener("click", 
        function(){

            this.classList.toggle("active");
            console.log(this.innerText);
        })

        gridElement.append(newElement);

    }

 })