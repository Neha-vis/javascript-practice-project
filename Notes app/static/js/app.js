const notesContainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");

// create note functionality
createbtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");

  let image = document.createElement("img");
  image.src = "./static/img/image.png";

  notesContainer.appendChild(inputBox);
  inputBox.appendChild(image);
});

// delete note functionality
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
});

// search functionality
// const searchInput = document.getElementById("search-input");

// searchInput.addEventListener("input", function () {
//   const searchText = searchInput.value.toLowerCase();
//   const notesArr = Array.from(notesContainer.children);

//   notesArr.forEach((note) => {
//     const noteText = note.textContent.toLowerCase();
//     if (noteText.includes(searchText)) {
//       note.style.display = "";
//     } else {
//       note.style.display = "none";
//     }
//   });
// });
