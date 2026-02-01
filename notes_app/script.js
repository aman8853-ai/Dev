const addBtn = document.getElementById("addNoteBtn");
const container = document.getElementById("notesContainer");

addBtn.onclick = () => {
  const note = document.createElement("div");
  note.className = "note";
  note.innerHTML = `
    <span class="close">x</span>
    <textarea placeholder="Write here..."></textarea>
  `;
  note.querySelector(".close").onclick = () => note.remove();
  container.appendChild(note);
};
