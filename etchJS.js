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

            let opacity = 0;

            gridBox.addEventListener('mouseenter', () => {
                let randomRGB1 = Math.round(Math.random() * 255); 
                let randomRGB2 = Math.round(Math.random() * 255); 
                let randomRGB3 = Math.round(Math.random() * 255); 

                opacity += 0.1;
                opacity = Math.max(0, opacity);
                
                gridBox.style.opacity = opacity;
                gridBox.style.backgroundColor = `rgb(${randomRGB1},${randomRGB2},${randomRGB3})`;
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
    } else if (size > 100) {
        alert("Please enter a number less than 100.")
        return;
    }

    console.log("Size:" + size);
    setSize(size);
})
