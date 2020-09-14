import React, { useState } from "react";
import SignIn from "../../auth/signin/SignIn";
import SignUp from "../../auth/signup/SignUp";
import { Modal, Fade } from "@material-ui/core";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { useStyles } from "../home/Home.style";
import CustomModal from "./CustomModal";

function AuthModalPortal({ url, modal, closeModal }) {
  const [signin, setSignin] = useState(false);

  // const modalRoot = document.getElementById("auth_modal");

  // const elementRef = useRef();

  // useEffect(() => {
  // We create an element div for this modal
  // elementRef.current = document.createElement("div");
  // elementRef.current.setAttribute("id", "modal");
  // modalRoot.appendChild(elementRef.current);
  // return () => {
  //   modalRoot.removeChild(elementRef.current);
  // };
  // }, []);

  const switchForm = () => {
    setSignin(!signin);
  };
  const classes = useStyles();
  return ReactDOM.createPortal(
    <Modal open={modal} onClose={closeModal} className={classes.modal}>
      <Fade in={modal}>
        <div className={classes.paper}>
          {signin ? (
            <SignIn url={url} handleForm={switchForm} />
          ) : (
            <SignUp url={url} close={closeModal} handleForm={switchForm} />
          )}
        </div>
      </Fade>
    </Modal>,
    document.getElementById("auth-modal")
  );

  /*<CustomModal
      signin={signin}
      url={url}
      modal={open}
      closeModal={handleClose}
      switchForm={switchForm}
    /> */
}

export default AuthModalPortal;
