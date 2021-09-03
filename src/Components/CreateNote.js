import "../Styles/CreateNote.css";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3, 77),
      width: "40ch",
      color: "green",
    },
  },
  margin: {
    margin: theme.spacing(1, 31),
  },
  inputMargin: {
    margin: theme.spacing(2, 0),
  },
}));


function Header(props) {
  const classes = useStyles();

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (e) => {
    // const value = e.target.vlaue;
    // const name = e.target.vlaue;
    const { name, value } = e.target; //object destructuring
    // console.log(e.target.value);

    setNote((prevData) => {
      return {
        ...prevData, //spread operator
        [name]: value, // dynamically value change
      };
    });

    console.log(note);
  };

  const addEvent = () => {
    // console.log("add");
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="box">
        <TextField
          // className={classes.margin}
          style={{ width: "100%" }}
          type="text"
          name="title"
          value={note.title}
          onChange={inputEvent}
          placeholder="Title"
          label="Title"
          id="standard-size-normal"
          defaultValue="Normal"
          // id="outlined-basic" label="Outlined" variant="outlined"
        />
        <TextField
          className={classes.inputMargin}
          style={{ width: "100%" }}
          type="text"
          name="content"
          value={note.content}
          onChange={inputEvent}
          placeholder="write a note..."
          // rows=""
          // column=""
          // id="standard-basic"
          label="content"
          id="standard-multiline-static"
          // label="Multiline"
          multiline
          rows={2}
          defaultValue="Default Value"
        />

        <Button className={classes.margin} onClick={addEvent} variant="contained" color="secondary">
          Add
        </Button>
      </div>
    </form>
  );
}

export default Header;

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <TextField id="standard-basic" label="Standard" />
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//     </form>
//   );
// }

////////////////////////////////////////////////////////////////////////////////////////////////////
