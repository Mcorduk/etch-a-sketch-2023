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