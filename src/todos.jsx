/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Modal, ListItem, Button ,TextField } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';

import CheckIcon from '@material-ui/icons/Check';
import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import db from "./firebase";


const todos = (props) => {
  const [open, setOpen] = useState(false);
  const [newinput, setNewinput] = useState("");
  const handledelete = (id) => {
    db.collection("todos").doc(id).delete();
  };

  const handleupdate = (id) => {
    db.collection("todos").doc(id).update({
      todo: newinput,
    });
    setOpen(false);
  };

  return (
    <>
      <Modal
      className="model-input"
      BackdropProps={{ invisible: true }}
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="update__modal">
          <div className="update">
          <TextField
              id="standard-textarea"
              label={props.data.todo}
              placeholder={props.data.todo}
              multiline
              value={newinput}
              className="input"
              onChange={(e) => setNewinput(e.target.value)}
                
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleupdate(props.data.id)}
            >
              <CheckIcon/>
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setOpen(false)}
            >
            <ClearIcon/>
            </Button>
          </div>
        </div>
      </Modal>

      <div className="list-items">
        <ListItem>{props.data.todo}</ListItem>

        <IconButton
          onClick={() => setOpen(true)}
          aria-label="delete"
          className=""
        >
         <EditIcon/>
        </IconButton>

        <IconButton
          onClick={() => handledelete(props.data.id)}
          aria-label="delete"
          className=""
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </>
  );
};

export default todos;
