const form = document.getElementById("noteForm");
const notesList = document.getElementById("notesList");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const noteDiv = document.createElement("div");
  noteDiv.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
  noteDiv.style.border = "1px solid #ccc";
  noteDiv.style.padding = "10px";
  noteDiv.style.marginBottom = "10px";

  notesList.appendChild(noteDiv);
  form.reset();
});
