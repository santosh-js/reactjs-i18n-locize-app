import React, { useState } from "react";
import styles from "./Signin.module.css";
import Button from "@material-ui/core/Button";
import serviceObj from "../services/AuthService";

function Signin(props) {
  const CREDENTIALS = { username: "", password: "" };

  const [creds, updateCreds] = useState(CREDENTIALS);

  const updateInput = (event) => {
    updateCreds({ ...creds, [event.target.name]: event.target.value });
  };

  const signin = (event) => {
    event.preventDefault();
    // alert(JSON.stringify(creds));
    const response = serviceObj.loginService(creds.username, creds.password);
    if (response) {
      props.url.push(`/main/${creds.username}`);
    } else {
      props.url.push("/");
      alert("Invalid username/password");
    }
  };

  return (
    <div className={styles.signin}>
      <h3>Form</h3>
      <div>
        Username:{" "}
        <input
          type="text"
          name="username"
          value={creds.username}
          onChange={updateInput}
        />
        <br />
        Password:{" "}
        <input
          type="password"
          name="password"
          value={creds.password}
          onChange={updateInput}
        />{" "}
        <br />
        <Button style={{ marginTop: "10px" }} onClick={signin} color="primary">
          Signin
        </Button>
      </div>
    </div>
  );
}

export default Signin;
