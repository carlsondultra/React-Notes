import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
    return <div className='note'>

        {/* Text inside the note */}
        <span>Hello!</span>
        {/* Footer of the note */}
        <div className="note-footer">
            <small>13/04/2021</small>
            <MdDeleteForever className='delete-icon' size='1.3em' /> 
        </div>

    </div>;
};

export default Note;