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


]);

  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  );
};

export default App;