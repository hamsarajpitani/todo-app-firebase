/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import "./App.css";

import AddIcon from "@material-ui/icons/Add";
import { Card,List,CardContent,Button,TextField,} from "@material-ui/core";
import { useEffect, useState } from "react";

import firebase from "firebase";
import db from "./firebase";
import Todos from "./todos";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  //TODO:load the todos from firestore at the app.js load and at event ADD/REMOVe occour
  //ToDO: use effect is best for it

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodo(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
          }))
        );
      });
    console.log(todo);
  }, []);

  const handlechange = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value);
  };

  const handleclick = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="main">
      <Card className="Card w-100 h-100">
        <CardContent className="Card-content w-100 h-100">
          <h1 className="text-center mb-4 titl">Todo App </h1>
          <form className="d-flex align-items-center justify-content-between">
            <TextField
              id="standard-textarea"
              label="☑️ Add todo item"
              placeholder="enter todays task"
              multiline
              value={input}
              onChange={handlechange}
            />
            <Button
              disabled={!input}
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleclick}
            >
              <AddIcon />
            </Button>
          </form>

          <List className="list">
            {todo.map((item) => {
              return <Todos data={item} />;
            })}
          </List>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;

{
  /* <IconButton aria-label="delete" >
              <DeleteIcon />
            </IconButton> */
}
