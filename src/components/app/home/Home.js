import React, { useState, useCallback, useReducer } from "react";
import { useStyles } from "./Home.style";
import { Button, Modal, Fade } from "@material-ui/core";
import styles from "./Home.module.css";
import ReactDOM from "react-dom";
import SignIn from "../../auth/signin/SignIn";
import SignUp from "../../auth/signup/SignUp";

function Home(props) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(false);

  const classes = useStyles();

  const handleOpen = useCallback(() => {
    setOpen(true);
  });

  const handleClose = useCallback(() => {
    setOpen(false);
  });

  const switchForm = useCallback(() => {
    setForm(!form);
  });

  return ReactDOM.createPortal(
    <div className={styles.home}>
      <Button onClick={handleOpen} variant="contained">
        SignIn / SignUp
      </Button>

      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <Fade in={open}>
          <div className={classes.paper}>
            {form ? (
              <SignIn url={props.history} handleForm={switchForm} />
            ) : (
              <SignUp
                url={props.history}
                close={handleClose}
                handleForm={switchForm}
              />
            )}
          </div>
        </Fade>
      </Modal>
    </div>,
    document.getElementById("auth_modal")
  );
}

export default Home;
