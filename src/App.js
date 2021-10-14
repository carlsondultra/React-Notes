import { useState } from "react";
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "Notes Test",
    date: "01/02/2021"
    },
    {
      id: nanoid(),
      text: "Notes Test 2",
      date: "02/02/2021"
    },
    {
      id: nanoid(),
      text: "Notes Test 3",
      date: "03/02/2021"
    },
    {
      id: nanoid(),
      text: "Notes Test 4",
      date: "04/02/2021"
    },
]);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text, 
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
}

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
}

  return (
    <div className="container">
      <NotesList 
        notes={notes} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}/>
    </div>
  );
};

export default App;