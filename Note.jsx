import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  // Handler function for the delete button click event
  function handleClick() {
    // Calls the onDelete function passed from the parent component with the note's id
    props.onDelete(props.id);
  }

  return (
    // Main container for a single note
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
