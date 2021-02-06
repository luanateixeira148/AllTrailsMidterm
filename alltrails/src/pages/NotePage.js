import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import "./NotePage.scss";
import NoteForm from "../comps/NoteForm";
import NoteList from "../comps/NoteList";
import BackArrow from "../comps/BackArrow";

const LOCAL_STORAGE_KEY = "react-note-list-notes";

function NotePage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageNotes) {
      setNotes(storageNotes);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  function addNote(note) {
    // adds new todo to beginning of todos array
    setNotes([note, ...notes]);
  }

  function toggleComplete(id) {
    setNotes(
      notes.map(note => {
        if (note.id === id) {
          return {
            ...note,
            completed: !note.completed
          };
        }
        return note;
      })
    );
  }

  function removeNote(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

  return (
    <div className="NotePage">
      <BackArrow></BackArrow>
      <Typography style={{ padding: 16 }} variant="h1">
        Create your list
      </Typography>
      <NoteForm addNote={addNote} />
      <NoteList
        notes={notes}
        removeNote={removeNote}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default NotePage;