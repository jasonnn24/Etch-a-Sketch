const etchGrid = document.querySelector(".etchGrid");
const setSizeButton = document.querySelector(".setSize")

const setSize = (size) => {
    etchGrid.innerHTML = "";
    etchGrid.style.setProperty('--grid-size', size);

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const gridBox = document.createElement("div");
            gridBox.textContent = i+1;
            gridBox.classList.add('box');

            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'yellow';
            });
            
            etchGrid.appendChild(gridBox);
        }
    }
}    

setSizeButton.addEventListener('click', () => {
    let size = parseInt(window.prompt("Please enter your size"))

    if (isNaN(size) || size <=  0) {
        alert("Please enter a valid number.");
        return;
    } else if (size >= 100) {
        alert("Please enter a number less than 100.")
        return;
    }

    console.log("Size:" + size);
    setSize(size);
})
