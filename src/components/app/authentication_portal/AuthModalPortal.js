import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Modal, Fade } from "@material-ui/core";
import SignIn from "../../auth/signin/SignIn";
import SignUp from "../../auth/signup/SignUp";
import { useStyles } from "../home/Home.style";

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
    document.getElementById("auth_modal")
  );
}

export default AuthModalPortal;
