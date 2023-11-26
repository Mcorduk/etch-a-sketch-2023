function addGrid(counter) {
    const container = document.querySelector("div");
    while (counter > 0) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
        counter--;
    }
};


addGrid(16);

function getRandomColor() {
    const colorRange = 255;
    let rgb = [0, 0, 0];
    for (let i = 0; i < rgb.length; i++) {
        let randomColor =
            Math.round(Math.random() * colorRange);
        rgb[i] = randomColor;
    }
    return rgb
};

function getUserInput() {
    let userInput = Number(prompt
        ("Pick a grid size! For instance '8' for an 8x8 grid."));

    while (isNaN(userInput) || typeof userInput !== 'number' ||
     userInput > 100 || userInput === undefined) {
        userInput = Number(prompt
            (`Invalid input. Pick a grid size! For instance '8' for an 8x8 grid.
Only numbers up to 100 are accepted.`));
    }
    return userInput;
}


// Get all elements with the class "grid"
const grids = document.querySelectorAll(".grid");
grids.forEach(grid => {
    grid.addEventListener('mouseover', function () {
        // Set the background color when the mouse is over the element
        let rgb = getRandomColor();
        let red, green, blue;
        red = rgb[0];
        green = rgb[1];
        blue = rgb[2];

        grid.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
});

const button = document.querySelector("button");
button.addEventListener("click", function () {
    const container = document.querySelector("div");
    let userInput = getUserInput();
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
});
