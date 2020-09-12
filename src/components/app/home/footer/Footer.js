import { Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import styles from "./Footer.module.css";
import { useStyles } from "./Footer.style";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  const classes = useStyles();

  return (
    <footer className={styles.footer}>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={8}>
          <Grid item xs={12}>
            <Typography
              style={{
                fontFamily: "Courier New",
                color: "#3be8b0",
              }}
              className={classes.paper}
              variant="h6"
              gutterBottom
            >
              <span style={{ color: "#ffc845" }}>"</span>
              There are 10 types of people in the world
              <span style={{ color: "#ffc845" }}>:</span>
              <br /> those who understand binary
              <span style={{ color: "#ffc845" }}>,</span>
              <br /> and those who don't
              <span style={{ color: "#ffc845" }}>.</span>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="stretch"
            >
              <Link
                className={styles.space}
                href="https://www.facebook.com/"
                target="_blank"
              >
                <FacebookIcon color="action" />
              </Link>
              <Link
                className={styles.space}
                href="https://twitter.com/"
                target="_blank"
              >
                <TwitterIcon color="action" />
              </Link>
              <Link
                className={styles.space}
                href="https://www.linkedin.com/"
                target="_blank"
              >
                <LinkedInIcon color="action" />
              </Link>
              <Link
                className={styles.space}
                href="https://www.instagram.com/"
                target="_blank"
              >
                <InstagramIcon color="action" />
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          style={{ marginTop: "20px" }}
          container
          direction="column"
          justify="space-between"
          alignItems="flex-start"
          xs={4}
        >
          <Link href="#">
            <Typography className={classes.paper}>Privacy Policy</Typography>
          </Link>
          <Link href="#">
            <Typography className={classes.paper}>
              Terms & Conditions
            </Typography>
          </Link>
          <Link href="#">
            <Typography className={classes.paper}>Help</Typography>
          </Link>
          <Link href="#">
            <Typography className={classes.paper}>About Us</Typography>
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
