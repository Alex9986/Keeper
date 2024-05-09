import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  // State to control the expansion of the input area (collapsed by default)
  const [isExpanded, setExpanded] = useState(false);

  // State for storing and managing the note object (title and content)
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // Handles changes in input fields, updating the note state
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value, // Dynamically sets the title or content based on input name
      };
    });
  }

  // Function to submit the note
  function submitNote(event) {
    props.onAdd(note); // Triggers the onAdd function passed as a prop from the parent component, sending the note upwards
    setNote({
      title: "",
      content: "", // Resets the note state to clear the form fields
    });
    event.preventDefault(); // Prevents the default form submit action to avoid page reload
  }

  // Function to expand the input area when the content field is clicked
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {/* Conditionally renders the title input field only if isExpanded is true */}
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        {/* Textarea for note content, expands upon clicking when not already expanded */}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />

        {/* Zoom effect for the add note button, appears only when the area is expanded */}
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
