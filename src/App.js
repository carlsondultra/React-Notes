import { useState } from "react";
import { nanoid } from 'nanoid';
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

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

const [searchText, setSearchText] = useState('');

const [darkMode, setDarkMode] = useState(false);

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
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <NotesList 
        notes={notes.filter((note) => 
          note.text.toLowerCase().includes(searchText)
          )} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}/>
      </div>
    </div>
    
  );
};

export default App;