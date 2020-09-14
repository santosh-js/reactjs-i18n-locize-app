import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../MaterialStyle";
import Container from "@material-ui/core/Container";
import serviceObj from "../services/AuthService";

function SignIn(props) {
  const classes = useStyles();
  const CREDENTIALS = { username: "", password: "" };
  const [creds, updateCreds] = useState(CREDENTIALS);

  const updateInput = (event) => {
    updateCreds({ ...creds, [event.target.name]: event.target.value });
  };

  const signin = (event) => {
    event.preventDefault();
    const response = serviceObj.loginService(creds.username, creds.password);
    if (response) {
      props.url.push(`/main/${creds.username}`);
    } else {
      props.url.push("/");
      alert("Invalid username/password");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <form onSubmit={signin} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            size="small"
            label="Username"
            name="username"
            value={creds.username}
            onChange={updateInput}
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            size="small"
            name="password"
            value={creds.password}
            onChange={updateInput}
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Button
                // variant="outlined"
                color="primary"
                onClick={props.handleForm}
                size="small"
                className={classes.margin}
              >
                {"Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
export default SignIn;
