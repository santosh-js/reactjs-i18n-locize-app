import React, { useState } from "react";
import { useStyles } from "./Home.style";
import { Button, Modal, Fade } from "@material-ui/core";
import styles from "./Home.module.css";
import ReactDOM from "react-dom";
import Signin from "../../auth/signin/Signin";

function Home(props) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return ReactDOM.createPortal(
    <div className={styles.home}>
      <Button onClick={handleOpen} variant="contained">
        Signin
      </Button>

      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <Fade in={open}>
          <div className={classes.paper}>
            <Signin url={props.history} />
          </div>
        </Fade>
      </Modal>
    </div>,
    document.getElementById("signin_modal")
  );
}

export default Home;
