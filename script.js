const container = document.querySelector(".container");

function resetGrid(){
    container.innerHTML = "";

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", function() {
                square.classList.add("hovered");
            });
            container.appendChild(square);
        }
    }
    
}
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", function() {
            square.classList.add("hovered");
        });
        container.appendChild(square);
    }
}