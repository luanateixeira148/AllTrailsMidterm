import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

function Note({ note, toggleComplete, removeNote }) {
  function handleCheckboxClick() {
    toggleComplete(note.id);
  }

  function handleRemoveClick() {
    removeNote(note.id);
  }

  return (
    <ListItem 
    style={{ 
      display: "flex",
      // alignItems: "flex-start",
      color: "#828282",
      marginBottom: "-10%",

    }}
    >
      <Checkbox checked={note.completed} onClick={handleCheckboxClick} 
      style={{
        color: "#428A13"
      }}
      />
      <Typography
        variant="body1"
        style={{
          textDecoration: note.completed ? "line-through" : null
        }}
      >
        {note.task}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

export default Note;