import React, { useState } from "react";
import "./App.css";
import CreateNote from "./Components/CreateNote";
import Note from "./Components/Note";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("i am clicked")

    setAddItem((prevData) => {
      return [...prevData, note];
    });

    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((oldData) => {
      return oldData.filter((currentdata, index) => {
        console.log(currentdata);
        return index !== id;
      });
    });
  };

  return (
    <>
      <CreateNote passNote={addNote} />
      {/* <Note /> */}

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}

      {/* array.map(function(currentValue, index, arr), thisValue) */}
    </>
  );
}

export default App;
