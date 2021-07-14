import "../Styles/Header.css";
import React, {useState} from "react";



function Header(props) {

    const [note, setNote] = useState({
        title:"",
        content:"",
    })

    const inputEvent = (e) => {

        // const value = e.target.vlaue;
        // const name = e.target.vlaue;

        const {name, value} = e.target;   //object destructuring

        // console.log(e.target.value);

        setNote((prevData) => {
            return {
                ...prevData,   //spread operator
                [name]: value,  // dynamically value change
            };
        });

        console.log(note)
    };

    const addEvent = () => {
      // console.log("add");
      props.passNote(note)
      setNote({
        title:"",
        content:"",
      })
    }
  return (
    <div className="header">
      <div className="box">
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={inputEvent}
          id=""
          placeholder="Title"
        />
        <textarea
          type="text"
          name="content"
          value={note.content}
          onChange={inputEvent}
          id=""
          placeholder="write a note..."
          rows=""
          column=""
        />
        <button onClick={addEvent}>Add</button>
      </div>
    </div>
  );
}

export default Header;
