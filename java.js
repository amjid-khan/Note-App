
const noteContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Load saved notes from localStorage
window.addEventListener("load", () => {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.forEach((noteText) => {
    addNoteToDOM(noteText);
  });
});

// Create button click
createBtn.addEventListener("click", () => {
  addNoteToDOM("");
  saveNotesToLocalStorage();
});

// Add a note to the DOM
function addNoteToDOM(text) {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  inputBox.innerText = text;

  img.src = "download.png";
  inputBox.appendChild(img);
  noteContainer.appendChild(inputBox);

  // Save note whenever content changes
  inputBox.addEventListener("input", saveNotesToLocalStorage);
}

// Delete note
noteContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveNotesToLocalStorage();
  }
});

// Save notes to localStorage
function saveNotesToLocalStorage() {
  const notes = document.querySelectorAll(".input-box");
  let data = [];
  notes.forEach((note) => {
    data.push(note.innerText.replace("\n", "").trim());
  });
  localStorage.setItem("notes", JSON.stringify(data));
}
