import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event){
    const {value, name} = event.target
    setNote(prevNote => ({...prevNote, [name]: value}));
  }

  function notEmpty(note){
    if(note.title === "" || note.content === ""){
      alert("Notes can't have empty fields");
      return false;
    }
    return true;
  }

  function submitNote(event){
    if(notEmpty(note)){
      props.onAdd(note);
    }
    event.preventDefault();
    setNote({
      title: "",
      content: ""
    })
  }
  
  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note" onChange={handleChange}>
        {
          isExpanded && (
            <input 
              name="title" 
              value={note.title} 
              placeholder="Title"
            />
        )}
        <textarea 
          onClick={expand} 
          name="content" 
          value={note.content} 
          placeholder="Take a note..." 
          rows={isExpanded ? 3 : 1}
          
        />
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
