// import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import "./NotePage.scss";
import NoteForm from "../comps/Note/NoteForm";
import NoteList from "../comps/Note/NoteList";
// import BackArrow from "../comps/BackArrow";
import BottomNav from "../comps/BottomNav/BottomNav";
import TopNav from "../comps/TopNav/TopNav";


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
      <TopNav />
      {/* <Typography style={{ padding: 16 }} variant="h3">
        Create your list
      </Typography> */}
      {/* <BackArrow /> */}
      <NoteForm addNote={addNote} />
      <NoteList className="List"
        notes={notes}
        removeNote={removeNote}
        toggleComplete={toggleComplete}
      />
      <BottomNav className="BottomNav"/>
    </div>
  );
}

export default NotePage;