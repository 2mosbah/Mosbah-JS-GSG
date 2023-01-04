const nameInput = document.getElementById("nameInput");
const generateButton = document.getElementById("generateButton");
const tagsContainer = document.getElementById("tagsContainer");
const clearButton = document.getElementById("clearButton");

function createTag(name) {
    const nameTag = document.createElement("div");
    nameTag.classList.add("nameTag");
    nameTag.style.backgroundColor = getRandomColor();

    const nameTagP = document.createElement("p");
    nameTagP.textContent = name;

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash";
    deleteIcon.classList.add("deleteIcon");
    deleteIcon.addEventListener("click", () => nameTag.remove());

    nameTag.appendChild(nameTagP);
    nameTag.appendChild(deleteIcon);

    return nameTag;
}

function generateName() {
    const name = nameInput.value;
    if (name) {
        const nameTag = createTag(name);
        tagsContainer.appendChild(nameTag);
    }
}

function clearTags() {
    while (tagsContainer.firstChild) {
        tagsContainer.removeChild(tagsContainer.firstChild);
    }
}

function getRandomColor() {
    var RandomR = Math.floor(Math.random() * 255);
    var RandomG = Math.floor(Math.random() * (255 - 150)) + 150;
    var RandomB = Math.floor(Math.random() * 255);
    return `rgb(${RandomR},${RandomG},${RandomB})`
}

generateButton.addEventListener("click", generateName);
clearButton.addEventListener("click", clearTags);