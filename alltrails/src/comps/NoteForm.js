import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";

function NoteForm({ addNote }) {
  const [note, setNote] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setNote({ ...note, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (note.task.trim()) {
      addNote({ ...note, id: uuidv4() });
      setNote({ ...note, task: "" });
    }
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <TextField
        label="+ Add New Item"
        type="text"
        name="task"
        value={note.task}
        onChange={handleTaskInputChange}
      />
      {/* <Button type="submit"></Button> */}
    </form>
  );
}

export default NoteForm;