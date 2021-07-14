import "../Styles/Note.css";
import React, { useState } from "react";

function Note(props) {
  // const [note, setNote] = useState({
  //     title:"",
  //     content:"",
  // })

  // const inputEvent = (e) => {

  //     // const value = e.target.vlaue;
  //     // const name = e.target.vlaue;

  //     const {name, value} = e.target;   //object destructuring

  //     // console.log(e.target.value);

  //     setNote((prevData) => {
  //         return {
  //             ...prevData,   //spread operator
  //             [name]: value,  // dynamically value change
  //         };
  //     });

  //     console.log(note)
  // };

  const deleteNote = () => {
    console.log("delete");
    props.deleteItem(props.id);
  };
  return (
    <div className="header">
      <div className="note">
        <h1> {props.title} </h1>
        <p> {props.content} </p>
        <button onClick={deleteNote}>delete</button>
      </div>

      {/* <div className="box">
        <input
          type="text"
          name="title"
        //   value={note.title}
        //   onChange={inputEvent}
          id=""
          placeholder="Title"
        />
        <textarea
          type="text"
          name="content"
        //   value={note.content}
        //   onChange={inputEvent}
          id=""
          placeholder="write a note..."
          rows=""
          column=""
        />
        <button onClick={delEvent}>Delte</button>
      </div> */}
    </div>
  );
}

export default Note;
