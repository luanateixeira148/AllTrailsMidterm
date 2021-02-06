let notes = [
    {
      id: 1,
      title: "Hiking gear to buy",
      item1: "trail shoes",
      item2: "mask",
      item3: "wool hat",
      completed: false
    },
    {
      id: 2,
      title: "Places I want to go",
      item1: "Grouse Mountain",
      item2: "Deer Lake",
      item3: "Joffre Lake",
      completed: false
    },
    {
      id: 3,
      title: "Hiking essentials",
      item1: "Water Bottle",
      item2: "Protein Bars",
      item3: "First Aid Kit",
      completed: false
    }
  ]
  
  function allNotes() {
    return notes
  }
  exports.allNotes = allNotes
  
  //Create / Add Note
  function createNote(note) {
    note.id = notes.length + 1 
    notes.push(note) 
    return note
  }
  exports.createNote = createNote
  
  //Delete Note
  function deleteNote(noteId) {
    const noteIndex = notes.findIndex(note => note.id === noteId)
    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1)
    }
    return {id: noteId}
  }
  exports.deleteNote = deleteNote
  
  //Update Note
  function updateNote(noteId, data) {
    if (data.completed !== undefined) { 
      const note = notes.find(note => note.id === noteId) 
      note.completed = data.completed 
    }
    return {id: noteId, ...data}
  }
  exports.updateNote = updateNote