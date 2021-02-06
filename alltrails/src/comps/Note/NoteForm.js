import React, { useState } from "react";
// import { TextField } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
// import { withStyles } from '@material-ui/core/styles';
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
        style={{
          marginBottom: "-3%",
          width: "85%",
        }}
        inputProps={{
          style: { color: "#428811"}
        }}
      />
      {/* <Button type="submit"></Button> */}
    </form>
  );
}

export default NoteForm;