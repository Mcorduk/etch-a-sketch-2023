function addGrid(counter) {
    const container = document.querySelector("div");
    while (counter > 0) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
        counter--;
    }
}

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


