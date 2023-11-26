// Function to add a grid of div elements to the container
function addGrid(counter) {
    // Select the container div element
    const container = document.querySelector("div");

    // Calculate the total number of grid elements
    const size = counter ** 2;

    // Loop to create and append each grid element
    for (let i = 0; i < size; i++) {
        const grid = document.createElement("div");

        // Add the "grid" class to the grid element
        grid.classList.add("grid");

        // Set additional styles for the grid element
        grid.style.border = "1px solid black";
        grid.style.height = `${800 / counter}px`;
        grid.style.width = `${800 / counter}px`;

        // Append the grid element to the container
        container.appendChild(grid);
    }

    // Set up event listeners for color change on hover
    setColorOnHover();
}

// Initial grid creation with a default size of 16
addGrid(16);

// Function to generate a random RGB color
function getRandomColor() {
    const colorRange = 255;
    let rgb = [0, 0, 0];
    for (let i = 0; i < rgb.length; i++) {
        let randomColor = Math.round(Math.random() * colorRange);
        rgb[i] = randomColor;
    }
    return rgb;
}

// Function to get user input for the grid size
function getUserInput() {
    let userInput = Number(prompt("Pick a grid size! For instance '8' for an 8x8 grid."));

    // Validate user input
    while (isNaN(userInput) || typeof userInput !== 'number' ||
        userInput > 100 || userInput <= 0) {
        userInput = Number(prompt(
            `Invalid input. Pick a grid size! For instance '8' for an 8x8 grid.
            Only numbers between 1 and 100 are accepted.`));
    }
    return userInput;
}

// Function to set color on hover for each grid element
function setColorOnHover() {
    // Get all elements with the class "grid"
    const grids = document.querySelectorAll(".grid");

    // Add event listeners for mouseover
    grids.forEach(grid => {
        grid.addEventListener('mouseover', function () {
            // Set the background color when the mouse is over the element
            let rgb = getRandomColor();
            let red = rgb[0];
            let green = rgb[1];
            let blue = rgb[2];

            grid.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });
    });
}

// Select the button element
const button = document.querySelector("button");

// Add event listener for button click
button.addEventListener("click", function () {
    // Select the container div element
    const container = document.querySelector("div");

    // Get user input for the new grid size
    let userInput = getUserInput();

    // Remove existing grid elements from the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Add a new grid with the updated size and set up color on hover
    addGrid(userInput);
    setColorOnHover();
});
