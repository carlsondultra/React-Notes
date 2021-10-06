const AddNote = () => {
    return(
        <div className="note new">
            <textarea 
                rows="8" 
                cols="10" 
                placeholder="Type to add..."
            ></textarea>    
            <div className="note-footer">
                <small>100 Characters Remaining</small>
                <button className="save">Save</button>
            </div>
        </div>
    )
}

export default AddNote;