function getNotes() {
    const notes = localStorage.getItem("notes");
    if (notes) {
        return JSON.parse(notes);
    }
    return [];
}

function setNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}