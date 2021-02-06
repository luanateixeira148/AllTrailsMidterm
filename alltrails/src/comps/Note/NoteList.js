import { List } from "@material-ui/core";
import React from "react";
import Todo from "./Note";

function NoteList({ notes, removeNote, toggleComplete }) {
  return (
    <List>
      {notes.map(note => (
        <Todo
          key={note.id}
          note={note}
          removeNote={removeNote}
          toggleComplete={toggleComplete}
        />
      ))}
    </List>
  );
}

export default NoteList;