import React, { useState } from "react";
import { Avatar, Button, Divider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "../MaterialStyle";
import serviceObj from "../services/AuthService";
import "./SignIn.css";

function SignUp(props) {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const USER = {
    id: count,
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  };

  const [user, setUser] = useState(USER);

  const updateInput = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const signup = (event) => {
    event.preventDefault();
    console.log(user);
    const response = serviceObj.registrationService(user);
    if (response) {
      setCount((prevCount) => prevCount + 1);
      alert("Account created successfully, please sign in");
      props.close();
      props.handleForm();
    } else {
      alert("Failed to create user, please try again");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={signup} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={user.firstName}
                onChange={updateInput}
                size="small"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={user.lastName}
                size="small"
                onChange={updateInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                size="small"
                name="username"
                autoComplete="username"
                value={user.username}
                onChange={updateInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                size="small"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={user.email}
                onChange={updateInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                size="small"
                type="password"
                id="password"
                autoComplete="current-password"
                value={user.password}
                onChange={updateInput}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
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
                {"Already have an account? Sign in"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <Divider />
      <div style={{ marginTop: "10px" }}></div>
      <button className="loginBtn loginBtn--facebook">
        Login with Facebook
      </button>
      or
      <button className="loginBtn loginBtn--google">Login with Google</button>
    </Container>
  );
}

export default SignUp;
