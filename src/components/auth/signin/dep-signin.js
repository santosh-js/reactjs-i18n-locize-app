import React, { useState } from "react";
import styles from "./Signin.module.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import serviceObj from "../services/AuthService";
import { useStyles } from "./MaterialStyle";

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
      <form
        onSubmit={signin}
        className={useStyles.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          label="Username"
          variant="filled"
          name="username"
          value={creds.username}
          onChange={updateInput}
        />
        <br />
        <TextField
          id="filled-basic"
          variant="filled"
          label="Password"
          name="password"
          value={creds.password}
          onChange={updateInput}
        />

        <br />
        <input
          style={{ marginTop: "10px" }}
          type="submit"
          value="Signin"
          color="primary"
        />
      </form>
    </div>
  );
}

export default Signin;
