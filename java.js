const noteContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "download.png";
    noteContainer.appendChild(inputBox).append(img);
})

noteContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
})
