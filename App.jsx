import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // State to keep track of all notes in an array
  const [notes, setNotes] = useState([]);

  // Function to add a new note to the list of notes
  function addNote(newNote) {
    setNotes(prevNotes => {
      // Adds new note to the existing notes array
      return [...prevNotes, newNote];
    });
  }

  // Function to delete a note from the list
  function deleteNote(id) {
    setNotes(prevNotes => {
      // Filters out the note with the specified id
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      {/* CreateArea component with addNote function passed as a prop */}
      <CreateArea onAdd={addNote} />
      {/* Map over each note in the state and render a Note component */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
