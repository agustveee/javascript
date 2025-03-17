const box = document.querySelector(".box");
const button = document.querySelector(".button");

function toggleBox() {
    const currentState = box.getAttribute("data-state");

    if (currentState === "closed" || !currentState) {
        box.setAttribute("src", "jack.png"); 
        box.setAttribute("data-state", "open");
        button.textContent = "Close";

        setTimeout(() => {
            box.setAttribute("src", "box.png");
            box.setAttribute("data-state", "closed");
            button.textContent = "Click Me";
        }, 3000);

    } else {
        box.setAttribute("src", "box.png"); 
        box.setAttribute("data-state", "closed");
        button.textContent = "Click Me";
    }
}

button.addEventListener("click", toggleBox);
