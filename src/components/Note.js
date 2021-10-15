import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id,  text, date, handleDeleteNote }) => {
    return <div className='note'>

        {/* Text inside the note */}
        <span>{text}</span>
        {/* Footer of the note */}
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever 
                onClick={() => handleDeleteNote(id)}
                className='delete-icon' 
                size='1.3em' 
            /> 
        </div>

    </div>;
};

export default Note;