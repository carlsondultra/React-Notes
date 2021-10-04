import Note from './Note';

const NotesList = ({ notes }) => {
    return(
        <div className="notes-list">
            {/* For each note, render a note component */}
            {notes.map((note) => (
                <Note 
                id={note.id} 
                text={note.text} 
                date={note.date}
                />
            ))}
        </div>
    )
}

export default NotesList;