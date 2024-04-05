const boxes = document.getElementsByClassName("box");
const container = document.querySelector(".container");
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.backgroundColor = "lightblue";
container.style.height = "100vh";
container.style.width = "100%";

const boxesArray = Array.from(boxes);

boxesArray.forEach((box, index) => {
    box.innerHTML = `box no. ${index + 1}`;
    box.style.border = "2px solid black";
    box.style.padding = "5px";
    box.style.margin = "10px";
    box.style.height = "fit-content";

    box.addEventListener("click", () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        box.style.backgroundColor = "#" + randomColor;
    });
});
