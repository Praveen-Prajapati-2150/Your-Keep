import "../Styles/Note.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function Note(props) {
  const deleteNote = () => {
    console.log("delete");
    props.deleteItem(props.id);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    margin: {
      margin: theme.spacing(2, 40),
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.root, classes.margin}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button onClick={deleteNote} size="small" color="secondary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );

  // return (
  //   <div className="header">
  //     <div className="note">
  //       <h1> {props.title} </h1>
  //       <p> {props.content} </p>
  //       <button onClick={deleteNote}>delete</button>
  //     </div>
  //   </div>
  // );
}

export default Note;
